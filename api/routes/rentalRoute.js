import { Router } from "express";
import { rentalController } from "../controllers/index.js";

const router = Router();

router.get("/rental", rentalController.getAllRentals);

export { router };
