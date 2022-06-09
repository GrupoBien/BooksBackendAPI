import express from "express";
import { booksRoute } from "./routes/index.js";
import { clientupdateRoute } from "./routes/index.js";

const api = express();

/**
 * Configuro primeros middlewares
 *
 * Configurar rutas
 *
 * Configurar Generic ErrorHandler
 */

api.use("/", booksRoute);
api.use("/", clientupdateRoute);

export default api;
