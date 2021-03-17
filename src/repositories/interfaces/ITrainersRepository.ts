import { ITrainer, IFindTrainersInDB, ITrainerInput } from '../../interfaces'

export interface ITrainersRepository {
	create(data: ITrainerInput): Promise<ITrainer>;
	findAll(data: IFindTrainersInDB): Promise<ITrainer[]>
	findById(id: string): Promise<ITrainer | null>;
	findByName(name: string): Promise<ITrainer | null>;
	updateById(id: string, data: Partial<ITrainerInput>): Promise<ITrainer | null>;
	deleteById(id: string): Promise<ITrainer | null>;
}
