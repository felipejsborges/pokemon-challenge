import { InputType, Field } from 'type-graphql';
import { TrainerType } from '../../types';

@InputType()
export class UpdateTrainerInput implements Partial<TrainerType> {
  @Field({ nullable: true })
  name?: string;

  @Field(() => [String], { nullable: true })
  pokemonsIds?: string[];
}
