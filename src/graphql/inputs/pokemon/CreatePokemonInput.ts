import { InputType, Field } from 'type-graphql';
import { IsBoolean, Max, Min } from 'class-validator'
import { PokemonType } from '../../types';

@InputType()
export class CreatePokemonInput implements Partial<PokemonType> {
  @Field(() => [String])
  abilities: string[];

  @Field()
  @Min(0)
  against_bug: number

  @Field()
  @Min(0)
  against_dark: number;

  @Field()
  @Min(0)
  against_dragon: number;

  @Field()
  @Min(0)
  against_electric: number;

  @Field()
  @Min(0)
  against_fairy: number;

  @Field()
  @Min(0)
  against_fight: number;

  @Field()
  @Min(0)
  against_fire: number;

  @Field()
  @Min(0)
  against_flying: number;

  @Field()
  @Min(0)
  against_ghost: number;

  @Field()
  @Min(0)
  against_grass: number;

  @Field()
  @Min(0)
  against_ground: number;

  @Field()
  @Min(0)
  against_ice: number;

  @Field()
  @Min(0)
  against_normal: number;

  @Field()
  @Min(0)
  against_poison: number;

  @Field()
  @Min(0)
  against_psychic: number;

  @Field()
  @Min(0)
  against_rock: number;

  @Field()
  @Min(0)
  against_steel: number;

  @Field()
  @Min(0)
  against_water: number;

  @Field()
  @Min(0)
  attack: number;

  @Field()
  @Min(0)
  base_egg_steps: number;

  @Field()
  @Min(0)
  base_happiness: number;

  @Field()
  @Min(0)
  base_total: number;

  @Field()
  capture_rate: string;

  @Field()
  classfication: string;

  @Field()
  @Min(0)
  defense: number;

  @Field()
  @Min(0)
  experience_growth: number;

  @Field({ nullable: true })
  @Min(0)
  height_m?: number;

  @Field()
  @Min(0)
  hp: number;

  @Field()
  japanese_name: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  @Min(0)
  @Max(100)
  percentage_male?: number;

  @Field()
  @Min(0)
  pokedex_number: number;

  @Field()
  @Min(0)
  sp_attack: number;

  @Field()
  @Min(0)
  sp_defense: number;

  @Field()
  @Min(0)
  speed: number;

  @Field()
  type1: string;

  @Field({ nullable: true })
  type2?: string;

  @Field({ nullable: true })
  @Min(0)
  weight_kg?: number;

  @Field()
  @Min(0)
  generation: number;

  @Field()
  @IsBoolean()
  is_legendary: boolean;
}
