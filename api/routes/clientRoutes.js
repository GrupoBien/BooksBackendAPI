import express from "express";
import createClient from "../controllers/createClient.js";

const router = express.Router();


router.post("/client", createClient)

export default router



