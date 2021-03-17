import { Resolver, Query, Arg, Mutation } from 'type-graphql'
import { TrainerType } from "../types"
import { CreateTrainerInput, UpdateTrainerInput, RequestOptionsInput } from "../inputs"
import { ITrainer } from '../../interfaces'
import { ITrainersService, TrainersService } from '../../services'

@Resolver(() => TrainerType)
export class TrainersResolver {
  private trainersService: ITrainersService

  constructor() {
    this.trainersService = new TrainersService()
  }

  @Query(() => TrainerType, { nullable: true })
  async trainer(@Arg("id") id: string): Promise<ITrainer | null> {
    const trainer = await this.trainersService.findById(id)

    return trainer
  }

  @Query(() => [TrainerType])
  async trainers(
    @Arg("filters", { nullable: true }) filters: UpdateTrainerInput,
    @Arg("options", { nullable: true }) options: RequestOptionsInput
  ): Promise<TrainerType[]> {
    const trainers = await this.trainersService.findAll({ filters, options })

    return trainers
  }

  @Mutation(() => TrainerType)
  async addTrainer(@Arg("trainer") { name, pokemonsIds }: CreateTrainerInput): Promise<TrainerType> {
    const trainer = await this.trainersService.create({
      name,
      pokemons: pokemonsIds
    })

    return trainer
  }

  @Mutation(() => TrainerType)
  async updateTrainer(
    @Arg("id") id: string,
    @Arg("data") data: UpdateTrainerInput
  ): Promise<ITrainer | null> {
    const { pokemonsIds, ...rest } = data
    const updatedTrainer = await this.trainersService.updateById(id, {
      ...rest,
      pokemons: pokemonsIds
    })

    return updatedTrainer
  }

  @Mutation(() => Boolean)
  async deleteTrainer(@Arg("id") id: string): Promise<boolean> {
    await this.trainersService.deleteById(id)

    return true
  }
}
