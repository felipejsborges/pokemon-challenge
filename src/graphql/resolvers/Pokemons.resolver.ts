import { Resolver, Query, Arg, Mutation } from 'type-graphql'
import { PokemonType } from "../types"
import { CreatePokemonInput, UpdatePokemonInput, RequestOptionsInput } from "../inputs"
import { IPokemon } from '../../interfaces'
import { IPokemonsService, PokemonsService } from '../../services'

@Resolver(() => PokemonType)
export class PokemonsResolver {
  private pokemonsService: IPokemonsService

  constructor() {
    this.pokemonsService = new PokemonsService()
  }

  @Query(() => PokemonType, { nullable: true })
  async pokemon(@Arg("id") id: string): Promise<IPokemon | null> {
    const pokemon = await this.pokemonsService.findById(id)

    return pokemon
  }

  @Query(() => [PokemonType])
  async pokemons(
    @Arg("filters", { nullable: true }) filters: UpdatePokemonInput,
    @Arg("options", { nullable: true }) options: RequestOptionsInput
  ): Promise<PokemonType[]> {
    const pokemons = await this.pokemonsService.findAll({ filters, options })

    return pokemons
  }

  @Mutation(() => PokemonType)
  async addPokemon(@Arg("pokemon") pokemonInput: CreatePokemonInput): Promise<IPokemon> {
    const pokemon = await this.pokemonsService.create(pokemonInput)

    return pokemon
  }

  @Mutation(() => PokemonType)
  async updatePokemon(
    @Arg("id") id: string,
    @Arg("data") data: UpdatePokemonInput
  ): Promise<IPokemon | null> {
    const updatedPokemon = await this.pokemonsService.updateById(id, data)

    return updatedPokemon
  }

  @Mutation(() => Boolean)
  async deletePokemon(@Arg("id") id: string): Promise<boolean> {
    await this.pokemonsService.deleteById(id)

    return true
  }

  @Query(() => [PokemonType])
  async randomPokemons(
    @Arg("filters", { nullable: true }) filters: UpdatePokemonInput,
    @Arg("quantity", { nullable: true }) quantity: number
  ): Promise<IPokemon[]> {
    const pokemons = await this.pokemonsService.findRandomPokemons({ filters, quantity })

    return pokemons
  }
}
