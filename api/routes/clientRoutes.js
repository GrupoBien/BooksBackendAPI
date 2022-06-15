import express from "express";
import createClient from "../controllers/createClient.js";

const router = express.Router();


router.post("/register", createClient)

export default router



