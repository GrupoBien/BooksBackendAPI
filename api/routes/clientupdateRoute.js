//TODO: cambiar nombre de archivo, normalizarlos
import { Router } from 'express';
import { clientupdateController } from '../controllers/index.js';

//TODO: exportar el final de archivo
export const router = Router();

router.put('/client/:id', clientupdateController.updateClient);
router.delete('/client/:id', clientupdateController.deleteClient);
