import express from 'express';
import {getLogin} from '../controllers/loginController.js';
import {isLoggedIn} from '../middlewares/index.js';

const router = express.Router();

/* route who get the username and the password and send it to userController
    we use the middleware isLoggedIn to validate the username and password was get it*/
router.get('/login', isLoggedIn, getLogin);

export default router;