import { Max, Min } from 'class-validator';
import { Field, Float, ID, Int, ObjectType } from 'type-graphql';
import { TrainerType } from '.';
import { IPokemon } from '../../interfaces'

@ObjectType()
export class PokemonType implements IPokemon {
  @Field(() => ID)
  id: string;

  @Field(() => TrainerType, { nullable: true })
  trainer?: TrainerType;

  @Field()
  avatar?: string;

  @Field(() => [String])
  abilities: string[];

  @Field(() => Float)
  against_bug: number

  @Field(() => Float)
  against_dark: number;

  @Field(() => Float)
  against_dragon: number;

  @Field(() => Float)
  against_electric: number;

  @Field(() => Float)
  against_fairy: number;

  @Field(() => Float)
  against_fight: number;

  @Field(() => Float)
  against_fire: number;

  @Field(() => Float)
  against_flying: number;

  @Field(() => Float)
  against_ghost: number;

  @Field(() => Float)
  against_grass: number;

  @Field(() => Float)
  against_ground: number;

  @Field(() => Float)
  against_ice: number;

  @Field(() => Float)
  against_normal: number;

  @Field(() => Float)
  against_poison: number;

  @Field(() => Float)
  against_psychic: number;

  @Field(() => Float)
  against_rock: number;

  @Field(() => Float)
  against_steel: number;

  @Field(() => Float)
  against_water: number;

  @Field(() => Int)
  attack: number;

  @Field(() => Int)
  base_egg_steps: number;

  @Field(() => Int)
  base_happiness: number;

  @Field(() => Int)
  base_total: number;

  @Field()
  capture_rate: string;

  @Field()
  classfication: string;

  @Field(() => Int)
  defense: number;

  @Field(() => Int)
  experience_growth: number;

  @Field(() => Float, { nullable: true })
  height_m?: number;

  @Field(() => Int)
  hp: number;

  @Field()
  japanese_name: string;

  @Field()
  name: string;

  @Field(() => Float, { nullable: true })
  @Min(0)
  @Max(100)
  percentage_male?: number;

  @Field(() => Int)
  pokedex_number: number;

  @Field(() => Int)
  sp_attack: number;

  @Field(() => Int)
  sp_defense: number;

  @Field(() => Int)
  speed: number;

  @Field()
  type1: string;

  @Field({ nullable: true })
  type2?: string;

  @Field(() => Float, { nullable: true })
  weight_kg?: number;

  @Field(() => Int)
  generation: number;

  @Field(() => Boolean)
  is_legendary: boolean;
}
