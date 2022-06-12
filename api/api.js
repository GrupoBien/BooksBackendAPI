import express from "express";
import * as routes from "./routes/index.js";


const api = express();

/**
 * Configuro primeros middlewares
 *
 * Configurar rutas
 *
 * Configurar Generic ErrorHandler
 */

api.use("/", routes.booksRoute);
api.use("/", routes.rentalRoute);
api.use("/", routes.clientupdateRoute);

export default api;
