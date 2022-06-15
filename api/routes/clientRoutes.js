import express from 'express';
import { clientController } from '../controllers/index.js';

const router = express.Router();

router.post('/register', clientController.createClient);
router.put('/clients/:id', clientController.updateClient);
router.delete('/clients/:id', clientController.deleteCliente);

export default router;
