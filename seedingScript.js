import dotenv from "dotenv";
import mysql from "mysql2";
import fs from "fs";
dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

// Create a connection to the database
const connection = mysql.createConnection(dbConfig);

// Read the SQL script from a file (assuming you have a seed.sql file with your data)
const seedScript = fs.readFileSync("seed.sql", "utf8");

// Execute the SQL script to insert the data
connection.query(seedScript, (err, results) => {
  if (err) {
    console.error("Error seeding data:", err);
    connection.end();
  } else {
    console.log(results);
    console.log("Data seeded successfully.");
    connection.end();
  }
});
