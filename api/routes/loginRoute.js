import { Router } from "express";
import { login } from "../controllers/loginController.js";
import {isLoggedIn} from '../middlewares/index.js';

const router = Router();

/* route who get the username and the password and send it to userController
    we use the middleware isLoggedIn to validate the username and password was get it*/
router.get('/login', isLoggedIn, login);

export { router };
