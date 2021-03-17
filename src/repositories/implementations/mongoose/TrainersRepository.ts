import TrainerModel from '../../../models/mongoose/TrainerModel'
import { ITrainer, IFindTrainersInDB, ITrainerInput } from '../../../interfaces'
import { ITrainersRepository, RepositoryHelper } from '../../'

export class TrainersRepository implements ITrainersRepository {
	private trainerModel
	private repositoryHelper

	constructor() {
		this.trainerModel = TrainerModel
		this.repositoryHelper = new RepositoryHelper()
	}

	async create(data: ITrainerInput): Promise<ITrainer> {
		const trainer = (await this.trainerModel.create(data)).populate('pokemons')

		return trainer
	}

	async findAll({ filters = {}, options = {} }: IFindTrainersInDB): Promise<ITrainer[]> {
		const parsedFilters = this.repositoryHelper.handleArrayInFilter(filters)

		const trainers = await this.trainerModel.find(parsedFilters, null, options)

		return trainers
	}

	async findById(id: string): Promise<ITrainer | null> {
		const trainer = await this.trainerModel.findById(id)

		return trainer
	}

	async findByName(name: string): Promise<ITrainer | null> {
		const trainer = await this.trainerModel.findOne({ name })

		return trainer
	}

	async updateById(id: string, data: Partial<ITrainerInput>): Promise<ITrainer | null> {
		const payload = data as Partial<ITrainer>

		const updatedTrainer = await this.trainerModel
			.findByIdAndUpdate(id, payload, { new: true }).populate('pokemons')

		return updatedTrainer
	}

	async deleteById(id: string): Promise<ITrainer | null> {
		const deletedTrainer = await this.trainerModel.findByIdAndDelete(id)

		return deletedTrainer
	}
}
