import express from "express";
import {
  bookVehicle,
  getvehiclessubcategory,
  getcategory,
  login,
} from "../controllers/vehicleController.js";
import authenticateToken from "../middleware/auth.js";
const router = express.Router();

// ==================Define routes for vehicles================

//login route to generate jwt
router.post("/login", login);

//get category of vehilcles
router.get("/vehiclescategory", authenticateToken, getcategory);

//get subcategory of vehicles by no of wheels
router.get(
  "/getsubcategoryofvehicles/:numberofwheels",
  authenticateToken,
  getvehiclessubcategory
);

//book vehicles by vehicles id and date

router.post("/bookVehicle", authenticateToken, bookVehicle);

export default router;
