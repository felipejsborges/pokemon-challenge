import { IPokemon } from "../";

export interface ITrainer {
	id: string;
	name: string;
	pokemons?: IPokemon[]
}
