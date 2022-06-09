import { Router } from 'express';
const userRouter = Router();

import { 
    createUser, 
    deleteUserById, 
    getUserById, 
    getUsers, 
    updateUserById 
} from '../controllers/user.controller.js';
import userMiddleware from '../middlewares/joi.middleware.js';

userRouter.post('/', userMiddleware('post', 'body'), createUser);

userRouter.get('/:id', userMiddleware('get', 'params'), getUserById);

userRouter.get('/', getUsers)

userRouter.delete('/:id',userMiddleware('delete', 'params'), deleteUserById);

userRouter.put('/:id', userMiddleware('put', 'body'), updateUserById);

export default userRouter;