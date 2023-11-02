import connect from "../config/connection.js";
import jwt from "jsonwebtoken";

// Login and generate JWT
export const login = async (req, res) => {
  const { firstName, secondName } = req.body;

  if (!firstName || !secondName) {
    return res
      .status(400)
      .json({ error: "First name and second name are required." });
  }

  const token = jwt.sign({ user: firstName }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.status(200).json({ token });
};

// Get vehicle categories
export const getcategory = async (req, res) => {
  try {
    const connection = connect();
    const [results] = await connection.query(
      "SELECT DISTINCT wheel_count AS number_of_wheels FROM vehicle_type"
    );

    connection.end(); // Close the connection after use
    if (results.length === 0) {
      return res.status(404).json({
        error: "No categories found for the specified number of wheels.",
      });
    }
    res.status(200).json(results);
  } catch (error) {
    console.error("Error getting categories:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get vehicles subcategories by number category
export const getvehiclessubcategory = async (req, res) => {
  const numberofwheels = req.params.numberofwheels;

  if (!numberofwheels) {
    return res
      .status(400)
      .json({ error: "Number of wheels parameter is required." });
  }

  if (isNaN(numberofwheels)) {
    return res
      .status(400)
      .json({ error: "Number of wheels must be a valid number." });
  }

  try {
    const connection = connect();
    const [results] = await connection.query(
      `SELECT * FROM vehicle_type WHERE wheel_count = ?`,
      [numberofwheels]
    );

    connection.end(); // Close the connection after use
    if (results.length === 0) {
      return res
        .status(404)
        .json({ error: "No Vehicle found for the specified category." });
    }
    res.status(200).json(results);
  } catch (error) {
    console.error("Error getting subcategories:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
