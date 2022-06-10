import express from "express";
import { booksRoute, booksCreateRouter, booksRoute, rentalRoute, userRoute } from "./routes/index.js";


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
api.use("/", userRoute);
export default api;
