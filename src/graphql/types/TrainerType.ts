import { Field, ID, ObjectType } from 'type-graphql';
import { ITrainer } from '../../interfaces'
import { PokemonType } from '.'

@ObjectType()
export class TrainerType implements ITrainer {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [PokemonType], { nullable: true })
  pokemons?: PokemonType[];
}
