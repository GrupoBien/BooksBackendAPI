import express from 'express';
import { booksRoute, rentalRoute, clientRoute } from './routes/index.js';
import config from './config/index.js';

const api = express();
//TODO: configurar morgan logger y que sea diferente por ambiente

api.use(express.json());
/**
 * Configurar Generic ErrorHandler
 */

api.get('/status', (req, res) => {
  return res.json({
    msg: 'Api funcionando',
  });
});

api.use(booksRoute);
api.use(rentalRoute);
api.use(clientRoute);

api.use((err, req, res, next) => {
  if (
    config.server.enviroment === 'development' ||
    config.server.enviroment === 'local' ||
    config.server.enviroment === 'test'
  ) {
    return res.status(500).json({
      msg: 'Error',
      error: err,
    });
  }
  return res.status(500).json({
    msg: 'Ha ocurrido un error en el server, comunícate con un desarrollador 🔥',
  });
});

export default api;
