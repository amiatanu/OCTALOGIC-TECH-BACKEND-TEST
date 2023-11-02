import connect from "../config/connection.js";

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
