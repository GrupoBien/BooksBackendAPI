import express from "express";
import { booksRoute, booksCreateRouter, booksRoute, rentalRoute } from "./routes/index.js";


const api = express();

/**
 * Configuro primeros middlewares
 *
 * Configurar rutas
 *
 * Configurar Generic ErrorHandler
 */

api.use("/", booksRoute);
api.use(booksCreateRouter)
api.use("/", rentalRoute);

export default api;
