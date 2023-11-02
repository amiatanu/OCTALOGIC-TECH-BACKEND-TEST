import express from "express";
import { getcategory } from "../controllers/vehicleController.js";

const router = express.Router();

// Define routes for vehicles
router.get("/getcategory", getcategory);

export default router;
