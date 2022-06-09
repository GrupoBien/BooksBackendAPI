import express from 'express';
import * as BookController from '../controllers/BookController.js';

const router = express.Router();

router.post('/book', BookController);

export default router;