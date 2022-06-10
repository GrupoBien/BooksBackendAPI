import { Router } from "express";
import { booksController } from "../controllers/index.js";
import { validateBook } from "../middlewares/index.js";

const router = Router();

router.post(
    "/books",
    validateBook.validateBookCreation,
    booksController.createBook
);
router.put("/books/:id", booksController.updateBook);
router.delete("/books/:id", booksController.deleteBook);

export { router };
