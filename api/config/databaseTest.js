import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let connection;
let mongoServer;

const connect = async () => {
  mongoServer = await MongoMemoryServer.create();
  connection = await mongoose.connect(mongoServer.getUri());
};

const close = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
};

const clear = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
};

export default {
  connect,
  clear,
  close,
};
