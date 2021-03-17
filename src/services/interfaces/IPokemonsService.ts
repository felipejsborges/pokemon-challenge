import { IPokemon, IRequestOptions, IFindRandomProps } from '../../interfaces';

export interface IFindAllProps {
	filters: Partial<IPokemon>;
	options: IRequestOptions
}

export interface IImportFile {
	filename: string
}

export interface IUploadAvatar {
	pokemonId: string;
	filename: string
}

export interface IPokemonsService {
	create(data: Omit<IPokemon, 'id'>): Promise<IPokemon>;
	findAll(data: IFindAllProps): Promise<IPokemon[]>
	findById(id: string): Promise<IPokemon | null>;
	updateById(id: string, data: Partial<IPokemon>): Promise<IPokemon | null>;
	deleteById(id: string): Promise<void>;
	importPokemons(data: IImportFile): Promise<number>;
	uploadPokemonAvatar(data: IUploadAvatar): Promise<Partial<IPokemon>>;
	findRandomPokemons(data: IFindRandomProps): Promise<IPokemon[]>;
}
