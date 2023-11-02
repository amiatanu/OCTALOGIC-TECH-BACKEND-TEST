import mysql from "mysql2";

export default function connection() {
  const dbHost = process.env.DB_HOST;
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASSWORD;
  const dbDatabase = process.env.DB_DATABASE;

  const pool = mysql.createPool({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbDatabase,
    waitForConnections: true,
    connectionLimit: 10, // Adjust the connection limit as needed
    queueLimit: 0,
  });

  return pool.promise(); // Return the connection pool
}
