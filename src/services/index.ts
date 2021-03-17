import { IPokemonsService, IFindAllProps, IImportFile, IUploadAvatar } from './interfaces/IPokemonsService'
import { IRaffledPokemonsService, IPokemons } from './interfaces/IRaffledPokemonsService'
import { PokemonsService } from './implementations/PokemonsService'
import { RaffledPokemonsService } from './implementations/RaffledPokemonsService'
import { ITrainersService } from './interfaces/ITrainersService'
import { TrainersService } from './implementations/TrainersService'

export {
	IFindAllProps,
	IPokemonsService,
	PokemonsService,
	IPokemons,
	IRaffledPokemonsService,
	RaffledPokemonsService,
	ITrainersService,
	TrainersService,
	IImportFile,
	IUploadAvatar
}
