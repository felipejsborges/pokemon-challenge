import { Resolver, Query } from 'type-graphql'
import { RaffledPokemonsType } from "../types"
import { IRaffledPokemons } from '../../interfaces'
import { IRaffledPokemonsService, RaffledPokemonsService } from '../../services'

@Resolver(() => RaffledPokemonsType)
export class RaffledPokemonsResolver {
  private raffledPokemonsService: IRaffledPokemonsService

  constructor() {
    this.raffledPokemonsService = new RaffledPokemonsService()
  }

  @Query(() => [RaffledPokemonsType])
  async raffledPokemons(): Promise<IRaffledPokemons[]> {
    const pokemons = await this.raffledPokemonsService.findAll()

    return pokemons
  }
}
