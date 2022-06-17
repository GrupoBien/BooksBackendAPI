import { Router } from 'express';
import { rentalController } from '../controllers/index.js';
import {validateCreateRental} from '../middlewares/index.js'

const router = Router();

router.route("/rentals").get(rentalController.getAllRentals).post(validateCreateRental,rentalController.createRenta);

export { router };
