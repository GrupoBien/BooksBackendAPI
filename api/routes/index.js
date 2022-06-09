import express from 'express';
import { createUser } from '../controllers/usersController.js';
import { validateUserCreation } from '../middlewares/index.js';

const router = express.Router();

router.post('/users', validateUserCreation, createUser);
