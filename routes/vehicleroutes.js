import express from "express";
import {
  getvehiclessubcategory,
  getcategory,
  login,
} from "../controllers/vehicleController.js";
import authenticateToken from "../middleware/auth.js";
const router = express.Router();

// Define routes for vehicles
router.get("/getcategory", /* authenticateToken, */ getcategory);

router.post("/login", login);

router.get("/getsubcategoryofvehicles/:numberofwheels", getvehiclessubcategory);

export default router;
