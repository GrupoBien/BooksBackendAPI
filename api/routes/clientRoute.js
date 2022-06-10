import { Router } from "express";
import { clientController } from "../controllers/index.js";

const router = Router();

router.put("/client/:id", clientController.updateClient);
router.delete("/client/:id", clientController.deleteClient);

export { router };
