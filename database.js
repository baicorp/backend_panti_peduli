import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: 3307,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export default db;
