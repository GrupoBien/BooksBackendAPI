import mongoose from 'mongoose';
import config from './index.js';
const db = mongoose.connection;
const { database } = config;

db.on('connecting', () => {
  console.log('💅🏽 Intentando conectarse a la base de datos');
});

db.on('error', (error) => {
  console.error('⭕ Error en mongoDB' + error);
});

db.on('connected', () => {
  console.log('✅ Conexiíon a la base de datos establecida ');
});

db.on('disconnected', () => {
  console.info('🥐 Se ha desconectado de la base de datos');
  setTimeout(init, 5000);
});

db.on('reconnected', () => {
  console.log('🙏🏽 Reconectado a la base de datos');
});

export default function init() {
  let uri = config.database.HOST === 'localhost' ? 'mongodb' : 'mongodb+srv';
  //let uri = config.server.enviroment === 'local' ? 'mongodb' : 'mongodb+srv';
  uri +=
    database.USER && database.PASSWORD
      ? `://${database.USER}:${database.PASSWORD}@`
      : '://';
  //uri += `${database.HOST}:${database.PORT}/${database.NAME}?retryWrites=true&w=majority`;
  uri +=
    config.database.HOST === 'localhost'
      ? `${database.HOST}:${database.PORT}/${database.NAME}?retryWrites=true&w=majority`
      : `${database.HOST}/${database.NAME}?retryWrites=true&w=majority`;

  mongoose.connect(uri);
}
