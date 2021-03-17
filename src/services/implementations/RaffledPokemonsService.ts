import { IRaffledPokemons } from '../../interfaces'
import { IRaffledPokemonsRepository, RaffledPokemonsRepository } from '../../repositories'
import { IRaffledPokemonsService, IPokemons } from '../'

export class RaffledPokemonsService implements IRaffledPokemonsService {
	private raffledPokemonsRepository: IRaffledPokemonsRepository

	constructor() {
		this.raffledPokemonsRepository = new RaffledPokemonsRepository()
	}
	
	async create({ pokemons }: IPokemons): Promise<IRaffledPokemons> {
		const pokemon = await this.raffledPokemonsRepository.create(pokemons)

		return pokemon
	}

	async findAll(): Promise<IRaffledPokemons[]> {
		const pokemons = await this.raffledPokemonsRepository.findAll()
		
		return pokemons
	}
}
