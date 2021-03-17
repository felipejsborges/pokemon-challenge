import { IPokemon, IRequestOptions, IFindInDBOptions, IFindRandomProps } from '../../interfaces'
import path from 'path'
import fs from 'fs'
import { IPokemonsRepository, PokemonsRepository } from '../../repositories'
import {
	IPokemonsService,
	IFindAllProps,
	IRaffledPokemonsService,
	RaffledPokemonsService,
	IImportFile,
	IUploadAvatar
} from '../'
import { ICsvParserProvider, CsvParserProvider } from '../../providers'
import { uploadConfig } from '../../configs/uploadConfig'

export class PokemonsService implements IPokemonsService {
	private pokemonsRepository: IPokemonsRepository
	private csvParserProvider: ICsvParserProvider
	private raffledPokemonsService: IRaffledPokemonsService
	private tmpFolder: string

	constructor() {
		this.pokemonsRepository = new PokemonsRepository()
		this.csvParserProvider = new CsvParserProvider()
		this.raffledPokemonsService = new RaffledPokemonsService()
		this.tmpFolder = uploadConfig.tempFolder
	}

	async create(data: Omit<IPokemon, 'id'>): Promise<IPokemon> {
		const pokemon = await this.pokemonsRepository.create(data)

		return pokemon
	}

	async findAll({ filters, options }: IFindAllProps): Promise<IPokemon[]> {
		const parsedOptions = options
			? this.parseOptions(options)
			: {}

		const pokemons = await this.pokemonsRepository.findAll({
			filters,
			options: parsedOptions
		})

		return pokemons
	}

	async findById(id: string): Promise<IPokemon> {
		const pokemon = await this.pokemonsRepository.findById(id)

		if (!pokemon) throw new Error('Pokemon not found')

		return pokemon
	}

	async updateById(id: string, data: Partial<IPokemon>): Promise<IPokemon> {
		const updatedPokemon = await this.pokemonsRepository.updateById(id, data)

		if (!updatedPokemon) throw new Error('Pokemon not found')

		return updatedPokemon
	}

	async deleteById(id: string): Promise<void> {
		const deletedPokemon = await this.pokemonsRepository.deleteById(id)

		if (!deletedPokemon) throw new Error('Pokemon not found')
	}

	async importPokemons({ filename }: IImportFile): Promise<number> {
		const csvFilePath = path.resolve(this.tmpFolder, filename)

		const pokemonsArray = await this.csvParserProvider.turnCsvIntoJSArray({ csvFilePath }) as Omit<IPokemon, 'id'>[]

		if (!pokemonsArray) throw new Error('Could not parse CSV file')

		const importedPokemons = await Promise.all(pokemonsArray.map(async (pokemon) => {
			const existentPokemon = await this.pokemonsRepository.findByName(pokemon.name)

			if (existentPokemon) return this.pokemonsRepository.updateById(existentPokemon.id, pokemon)

			return this.pokemonsRepository.create(pokemon)
		}))

		fs.unlinkSync(csvFilePath)

		return importedPokemons
			.filter(item => !!item)
			.length
	}

	async uploadPokemonAvatar({ filename, pokemonId }: IUploadAvatar): Promise<Partial<IPokemon>> {
		const avatarFilePath = path.resolve(this.tmpFolder, filename)

		const pokemonWithAvatar = await this.updateById(pokemonId, { avatar: avatarFilePath })

		if (!pokemonWithAvatar) throw new Error('Pokemon not found')

		return pokemonWithAvatar
	}

	async findRandomPokemons({ filters = {}, quantity = 10 }: IFindRandomProps): Promise<IPokemon[]> {
		const pokemons = await this.pokemonsRepository.findRandom({
			filters,
			quantity
		})

		await this.raffledPokemonsService.create({ pokemons })

		return pokemons
	}

	private parseOptions({ page, perPage, ...options }: IRequestOptions): IFindInDBOptions {
		let parsedOptions: IFindInDBOptions = options

		if (!!page && !!perPage) {
			const { limit, skip } = this.getDBPaginationOptions({ page, perPage })

			parsedOptions.limit = limit
			
			parsedOptions.skip = skip
		}

		return parsedOptions
	}

	private getDBPaginationOptions({ page, perPage }: IRequestOptions): IFindInDBOptions {
		const skip = Number(page - 1) * Number(perPage)

		const limit = Number(perPage)

		return {
			skip,
			limit
		}
	}
}
