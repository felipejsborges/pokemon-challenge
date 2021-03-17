import { ITrainer, IFindInDBOptions } from '../'

export interface IFindTrainersInDB {
	filters?: Partial<ITrainer>;
	options?: IFindInDBOptions
}
