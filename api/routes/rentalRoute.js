import { Router } from "express";
import { rentalController } from "../controllers";

const router = Router();

router.get("/rental", rentalController.getAllRentals);

export { router };
