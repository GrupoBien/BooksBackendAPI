import express from "express";
import { booksRoute, booksCreateRouter, rentalRoute, clientupdateRoute } from "./routes/index.js";


const api = express();

/**
 * Configuro primeros middlewares
 *
 * Configurar rutas
 *
 * Configurar Generic ErrorHandler
 */

api.use("/", booksRoute);
api.use(booksCreateRouter);
api.use("/", rentalRoute);
api.use("/", clientupdateRoute);

export default api;
