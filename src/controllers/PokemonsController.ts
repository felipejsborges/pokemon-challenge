import { Request, Response } from "express";
import { PokemonsService } from "../services";

export class PokemonsController {
	constructor() { }

	async importPokemons(request: Request, response: Response): Promise<Response> {
		try {
			const pokemonsService = new PokemonsService()

			const filename = request.filename

			const importedPokemons = await pokemonsService.importPokemons({ filename })

			return response.status(200).json({ importedPokemons })
		} catch (err) {
			console.error(err)
			return response.status(400).json({ message: 'could not import pokemons', err })
		}
	}

	async uploadPokemonAvatar(request: Request, response: Response): Promise<Response> {
		const pokemonsService = new PokemonsService()

		const { params, filename } = request

		const { pokemonId } = params

		const { avatar } = await pokemonsService.uploadPokemonAvatar({ pokemonId, filename })

		return response.status(200).json({ avatar })
	}
}