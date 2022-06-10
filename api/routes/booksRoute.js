import { Router } from "express";
import { booksController } from "../controllers/index.js";
import {validateBookeCreation} from '../middlewares/index.js'

const router = Router();

router.post('/books', validateBookeCreation, booksController.createBook)
router.put("/books/:id", booksController.updateBook);
router.delete("/books/:id", booksController.deleteBook);
router.get("/books/:title", booksController.getBook);

export { router };
