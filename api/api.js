import express from 'express';
import { booksRoute, rentalRoute, clientRoute } from './routes/index.js';

const api = express();
//TODO: falta configurar express.json()
//TODO: configurar morgan logger y que sea diferente por ambiente

/**
 * Configuro primeros middlewares
 *
 * Configurar rutas
 *
 * Configurar Generic ErrorHandler
 */

//TODO: que todas vean iguales

api.get('/status', (req, res) => {
  return res.json({
    msg: 'Api funcionando',
  });
});

api.use(booksRoute);
api.use(rentalRoute);
api.use(clientRoute);

export default api;
