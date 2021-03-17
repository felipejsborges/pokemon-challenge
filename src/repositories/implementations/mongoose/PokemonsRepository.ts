import PokemonModel from '../../../models/mongoose/PokemonModel'
import { IPokemon, IFindPokemonsInDB, IFindRandomProps } from '../../../interfaces'
import { IPokemonsRepository, RepositoryHelper } from '../../'

export class PokemonsRepository implements IPokemonsRepository {
	private pokemonModel
	private repositoryHelper

	constructor() {
		this.pokemonModel = PokemonModel
		this.repositoryHelper = new RepositoryHelper()
	}

	async create(data: Omit<IPokemon, 'id'>): Promise<IPokemon> {
		const pokemon = await this.pokemonModel.create(data)

		return pokemon
	}

	async findAll({ filters = {}, options = {} }: IFindPokemonsInDB): Promise<IPokemon[]> {
		const parsedFilters = this.repositoryHelper.handleArrayInFilter(filters)

		const pokemons = await this.pokemonModel.find(parsedFilters, null, options)

		return pokemons
	}

	async findById(id: string): Promise<IPokemon | null> {
		const pokemon = await this.pokemonModel.findById(id)

		return pokemon
	}

	async findByName(name: string): Promise<IPokemon | null> {
		const pokemon = await this.pokemonModel.findOne({ name })

		return pokemon
	}

	async updateById(id: string, data: Partial<IPokemon>): Promise<IPokemon | null> {
		const updatedPokemon = await this.pokemonModel.findByIdAndUpdate(id, data, { new: true })

		return updatedPokemon
	}

	async deleteById(id: string): Promise<IPokemon | null> {
		const deletedPokemon = await this.pokemonModel.findByIdAndDelete(id)

		return deletedPokemon
	}

	async findRandom({ filters, quantity }: IFindRandomProps): Promise<IPokemon[]> {
		const parsedFilters = this.repositoryHelper.handleArrayInFilter(filters)

		const pokemons = await this.pokemonModel.aggregate([
			{ $match: parsedFilters },
			{ $sample: { size: quantity } }
		])

		await this.pokemonModel.createCollection()

		return pokemons
	}
}
