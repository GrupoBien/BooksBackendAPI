<<<<<<< HEAD
import express from 'express';
=======
import express from "express";
import { booksRoute, rentalRoute } from "./routes/index.js";

>>>>>>> 88c26df4a055d416be3a2401c15fd0a196edc235
const api = express();

api.use(express.json())

api.use("/", booksRoute);
api.use("/", rentalRoute);

export default api;
