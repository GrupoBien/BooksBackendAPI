import { Router } from 'express';
import { loginController } from '../controllers/index.js';
import { isLoggedIn, validUser } from '../middlewares/index.js';

const router = Router();

router.post('/login', isLoggedIn, loginController.login);
router.post('/registerLogin', validUser, loginController.register);
export { router };
