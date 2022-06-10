import { Router } from "express";
import { clientupdateController } from "../controllers/index.js";


export const router = Router();

router.put("/client/:id", clientupdateController.updateClient);
router.delete("/client/:id", clientupdateController.deleteClient);