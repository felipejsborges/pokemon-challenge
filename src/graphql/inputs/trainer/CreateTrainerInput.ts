import { InputType, Field } from 'type-graphql';
import { TrainerType } from '../../types';

@InputType()
export class CreateTrainerInput implements Partial<TrainerType> {
  @Field()
  name: string;

  @Field(() => [String], { nullable: true })
  pokemonsIds?: string[];
}
