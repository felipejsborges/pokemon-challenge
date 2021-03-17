import { IPokemon, IRaffledPokemons } from '../../interfaces'

export interface IRaffledPokemonsRepository {
	create(data: IPokemon[]): Promise<IRaffledPokemons>;
	findAll(): Promise<IRaffledPokemons[]>
}
