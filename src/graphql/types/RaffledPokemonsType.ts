import { Field, ID, ObjectType } from 'type-graphql';
import { IRaffledPokemons } from '../../interfaces'
import { PokemonType } from '.'

@ObjectType()
export class RaffledPokemonsType implements IRaffledPokemons {
  @Field(() => ID)
  id: string;

  @Field(() => [PokemonType])
  pokemons: PokemonType[];
}
