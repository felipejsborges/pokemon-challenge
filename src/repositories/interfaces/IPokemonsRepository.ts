import { IPokemon, IFindPokemonsInDB, IFindRandomProps } from '../../interfaces'

export interface IPokemonsRepository {
	create(data: Omit<IPokemon, 'id'>): Promise<IPokemon>;
	findAll(data: IFindPokemonsInDB): Promise<IPokemon[]>
	findById(id: string): Promise<IPokemon | null>;
	findByName(name: string): Promise<IPokemon | null>;
	updateById(id: string, data: Partial<IPokemon>): Promise<IPokemon | null>;
	deleteById(id: string): Promise<IPokemon | null>;
	findRandom(data: IFindRandomProps): Promise<IPokemon[]>
}
