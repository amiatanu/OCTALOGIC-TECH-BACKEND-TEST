import { connection } from "./config/connection.js";
import dotenv from "dotenv";
import express from "express";
dotenv.config();
const app = express();
//middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//server setup
app.listen(process.env.SERVER_PORT, () => {
  console.log(`server is running on ${process.env.SERVER_PORT}`);
});

//database connection
connection();
