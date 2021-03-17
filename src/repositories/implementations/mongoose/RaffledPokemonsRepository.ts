import RaffledPokemonsModel from '../../../models/mongoose/RaffledPokemonsModel'
import { IPokemon, IRaffledPokemons } from '../../../interfaces'
import { IRaffledPokemonsRepository } from '../../'

export class RaffledPokemonsRepository implements IRaffledPokemonsRepository {
	private raffledPokemonsModel

	constructor() {
		this.raffledPokemonsModel = RaffledPokemonsModel
	}

	async create(data: IPokemon[]): Promise<IRaffledPokemons> {
		const raffledPokemons = await this.raffledPokemonsModel.create({ pokemons: data })

		return raffledPokemons
	}

	async findAll(): Promise<IRaffledPokemons[]> {
		const raffledPokemonsList = await this.raffledPokemonsModel
			.find()
			.populate('pokemons')

		return raffledPokemonsList
	}
}
