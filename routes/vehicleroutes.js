import express from "express";
import { getcategory, login } from "../controllers/vehicleController.js";
import authenticateToken from "../middleware/auth.js";
const router = express.Router();

// Define routes for vehicles
router.get("/getcategory", authenticateToken, getcategory);

router.post("/login", login);

export default router;
