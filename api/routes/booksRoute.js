import { Router } from "express";
import { booksController } from "../controllers/index.js";

const router = Router();

router.put("/books/:id", booksController.updateBook);
router.delete("/books/:id", booksController.deleteBook);

export { router };
