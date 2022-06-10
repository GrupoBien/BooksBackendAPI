import express from 'express';
const api = express();

api.use(express.json())

api.use("/", booksRoute);
api.use("/", rentalRoute);

export default api;
