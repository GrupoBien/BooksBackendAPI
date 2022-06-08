import { Router } from "express";
import { booksController } from "../controllers";

const router = Router();

router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);
