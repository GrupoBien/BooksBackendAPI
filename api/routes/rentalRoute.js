import { Router } from 'express';
import { rentalController } from '../controllers/index.js';

const router = Router();

router.route("/rentals").get(rentalController.getAllRentals).post(rentalController.createRenta);

export { router };
