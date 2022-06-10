import { Router } from 'express';
const userRouter = Router();

import { 
    createUser, 
    deleteUserById, 
    getUserById, 
    getUsers, 
    updateUserById 
} from '../controllers/index.js';
import userMiddleware from '../middlewares/index.js';

userRouter.post('/users', userMiddleware('post', 'body'), createUser);

userRouter.get('/users/:id', userMiddleware('get', 'params'), getUserById);

userRouter.get('/users', getUsers)

userRouter.delete('/users/:id',userMiddleware('delete', 'params'), deleteUserById);

userRouter.put('/users/:id', userMiddleware('put', 'body'), updateUserById);

export default userRouter;

