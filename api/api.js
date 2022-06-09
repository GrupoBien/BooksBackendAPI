import express from 'express';
import { booksRoute } from './routes/index.js';

const api = express();

api.use('/', booksRoute);

export default api;
