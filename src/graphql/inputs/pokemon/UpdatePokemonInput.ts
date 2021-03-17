import { InputType, Field } from 'type-graphql';
import { IsBoolean, Max, Min } from 'class-validator'
import { PokemonType } from '../../types';

@InputType()
export class UpdatePokemonInput implements Partial<PokemonType> {
  @Field(() => [String], { nullable: true })
  abilities?: string[];

  @Field({ nullable: true })
  against_bug?: number

  @Field({ nullable: true })
  against_dark?: number;

  @Field({ nullable: true })
  against_dragon?: number;

  @Field({ nullable: true })
  against_electric?: number;

  @Field({ nullable: true })
  against_fairy?: number;

  @Field({ nullable: true })
  against_fight?: number;

  @Field({ nullable: true })
  against_fire?: number;

  @Field({ nullable: true })
  against_flying?: number;

  @Field({ nullable: true })
  against_ghost?: number;

  @Field({ nullable: true })
  against_grass?: number;

  @Field({ nullable: true })
  against_ground?: number;

  @Field({ nullable: true })
  against_ice?: number;

  @Field({ nullable: true })
  against_normal?: number;

  @Field({ nullable: true })
  against_poison?: number;

  @Field({ nullable: true })
  against_psychic?: number;

  @Field({ nullable: true })
  against_rock?: number;

  @Field({ nullable: true })
  against_steel?: number;

  @Field({ nullable: true })
  against_water?: number;

  @Field({ nullable: true })
  attack?: number;

  @Field({ nullable: true })
  base_egg_steps?: number;

  @Field({ nullable: true })
  base_happiness?: number;

  @Field({ nullable: true })
  base_total?: number;

  @Field({ nullable: true })
  capture_rate?: string;

  @Field({ nullable: true })
  classfication?: string;

  @Field({ nullable: true })
  defense?: number;

  @Field({ nullable: true })
  experience_growth?: number;

  @Field({ nullable: true })
  height_m?: number;

  @Field({ nullable: true })
  hp?: number;

  @Field({ nullable: true })
  japanese_name?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  @Min(0)
  @Max(100)
  percentage_male?: number;

  @Field({ nullable: true })
  pokedex_number?: number;

  @Field({ nullable: true })
  sp_attack?: number;

  @Field({ nullable: true })
  sp_defense?: number;

  @Field({ nullable: true })
  speed?: number;

  @Field({ nullable: true })
  type1?: string;

  @Field({ nullable: true })
  type2?: string;

  @Field({ nullable: true })
  weight_kg?: number;

  @Field({ nullable: true })
  generation?: number;

  @Field({ nullable: true })
  @IsBoolean()
  is_legendary?: boolean;
}
