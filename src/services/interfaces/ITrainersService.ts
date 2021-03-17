import { ITrainer, IRequestOptions, ITrainerInput } from '../../interfaces';

export interface IFindAllProps {
	filters: Partial<ITrainer>;
	options: IRequestOptions
}

export interface ITrainersService {
	create(data: ITrainerInput): Promise<ITrainer>;
	findAll(data: IFindAllProps): Promise<ITrainer[]>
	findById(id: string): Promise<ITrainer | null>;
	updateById(id: string, data: Partial<ITrainerInput>): Promise<ITrainer | null>;
	deleteById(id: string): Promise<void>;
}