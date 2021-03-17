import mongoose, { Mongoose } from 'mongoose';

export const mongooseConnect = async (): Promise<Mongoose> =>
  await mongoose.connect(String(process.env.MONGO_URL), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

export const mongooseClose = (): Promise<void> => mongoose.connection.close()
