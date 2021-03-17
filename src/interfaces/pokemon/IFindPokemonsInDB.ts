import { IPokemon, IFindInDBOptions } from '../'

export interface IFindPokemonsInDB {
	filters?: Partial<IPokemon>;
	options?: IFindInDBOptions
}
