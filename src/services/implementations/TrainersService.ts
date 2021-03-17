import { ITrainer, IRequestOptions, IFindInDBOptions, ITrainerInput } from '../../interfaces'
import { ITrainersRepository, TrainersRepository } from '../../repositories'
import { ITrainersService, IFindAllProps } from '../'

export class TrainersService implements ITrainersService {
	private trainersRepository: ITrainersRepository

	constructor() {
		this.trainersRepository = new TrainersRepository()
	}

	async create({ name, pokemons }: ITrainerInput): Promise<ITrainer> {
		const existentTrainer = await this.trainersRepository.findByName(name)

		if (!!existentTrainer) throw new Error(`Trainer "${existentTrainer.name}" is already registered`)

		this.checkQuantityPerTrainer(pokemons)

		const trainer = await this.trainersRepository.create({ name, pokemons })

		return trainer
	}

	async findAll({ filters, options }: IFindAllProps): Promise<ITrainer[]> {
		const parsedOptions = options
			? this.parseOptions(options)
			: {}

		const trainers = await this.trainersRepository.findAll({
			filters,
			options: parsedOptions
		})

		return trainers
	}

	async findById(id: string): Promise<ITrainer> {
		const trainer = await this.trainersRepository.findById(id)

		if (!trainer) throw new Error('Trainer not found')

		return trainer
	}

	async updateById(id: string, data: Partial<ITrainerInput>): Promise<ITrainer | null> {
		this.checkQuantityPerTrainer(data.pokemons)

		const updatedTrainer = await this.trainersRepository.updateById(id, data)

		if (!updatedTrainer) throw new Error('Trainer not found')

		return updatedTrainer
	}

	async deleteById(id: string): Promise<void> {
		const deletedTrainer = await this.trainersRepository.deleteById(id)

		if (!deletedTrainer) throw new Error('Trainer not found')
	}

	private parseOptions({ page, perPage, ...options }: IRequestOptions): IFindInDBOptions {
		let parsedOptions: IFindInDBOptions = options

		if (!!page && !!perPage) {
			const { limit, skip } = this.getDBPaginationOptions({ page, perPage })

			parsedOptions.limit = limit
			parsedOptions.skip = skip
		}

		return parsedOptions
	}

	private getDBPaginationOptions({ page, perPage }: IRequestOptions): IFindInDBOptions {
		const skip = Number(page - 1) * Number(perPage)
		const limit = Number(perPage)

		return {
			skip,
			limit
		}
	}

	checkQuantityPerTrainer(pokemons?: string[]): void {
		if (Array.isArray(pokemons) && pokemons.length > 7) throw new Error('Maximum 7 pokemons per trainer')
	}
}
