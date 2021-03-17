import mongoose, { model, Schema, Model, Document } from 'mongoose';
import { IRaffledPokemons } from '../../interfaces'

type IRaffledPokemonsModel = IRaffledPokemons & Document

const RaffledPokemonsSchema: Schema = new Schema({
  pokemons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PokemonModel', require: true }],
});

const RaffledPokemonsModel: Model<IRaffledPokemonsModel> = model('RaffledPokemonsModel', RaffledPokemonsSchema);

export default RaffledPokemonsModel
