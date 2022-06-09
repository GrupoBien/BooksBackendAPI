import express from "express";
import { booksRoute } from "./routes";

const api = express();

/**
 * Configuro primeros middlewares
 *
 * Configurar rutas
 *
 * Configurar Generic ErrorHandler
 */

api.use("/", booksRoute);

export default api;
