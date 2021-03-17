import { IPokemon, IRaffledPokemons } from '../../interfaces';

export interface IPokemons {
	pokemons: IPokemon[]
}
export interface IRaffledPokemonsService {
	create(data: IPokemons): Promise<IRaffledPokemons>;
	findAll(): Promise<IRaffledPokemons[]>
}