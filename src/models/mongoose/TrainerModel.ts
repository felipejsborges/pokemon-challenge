import mongoose, { model, Schema, Model, Document } from 'mongoose';
import { ITrainer } from '../../interfaces'

type ITrainerModel = ITrainer & Document

export const TrainerSchema: Schema = new Schema({
	name: { type: String, required: true },
	pokemons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PokemonModel' }]
});

const TrainerModel: Model<ITrainerModel> = model('TrainerModel', TrainerSchema);

export default TrainerModel
