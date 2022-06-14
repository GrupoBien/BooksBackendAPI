import express from 'express';
import {
  booksRoute,
  booksCreateRouter,
  rentalRoute,
  clientupdateRoute,
} from './routes/index.js';

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
api.use('/', booksRoute);
api.use(booksCreateRouter);
api.use('/', rentalRoute);
api.use('/', clientupdateRoute);

export default api;
