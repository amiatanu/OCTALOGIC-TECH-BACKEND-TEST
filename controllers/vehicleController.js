import connect from "../config/connection.js";
import jwt from "jsonwebtoken";

//login and generate JWT
export const login = async (req, res) => {
  const { firstName, secondName } = req.body;
  //
  if (firstName && secondName) {
    const token = jwt.sign({ user: firstName }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  }
};

// Get  vehicles category
export const getcategory = async (req, res) => {
  try {
    const connection = connect();
    const [results] = await connection.query(
      "SELECT DISTINCT wheel_count AS number_of_wheels FROM vehicle_type"
    );

    connection.end(); // Close the connection after use

    res.status(200).json(results);
  } catch (error) {
    console.error("Error getting categories:", error);
    res.status(500).send("Error getting categories");
  }
};
