//TODO: cambiar nombre de archivo, normalizarlos
import { Router } from 'express';
import { clientController } from '../controllers/index.js';

//TODO: exportar el final de archivo
export const router = Router();

router.put('/clients/:id', clientController.updateClient);
router.delete('/clients/:id', clientController.deleteCliente);
