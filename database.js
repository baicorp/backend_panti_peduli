// import mysql from "mysql";
// import dotenv from "dotenv";

// dotenv.config();

// // const db = mysql.createConnection(process.env.DB_URL);
// const db = mysql.createConnection(
//   process.env.DB_URL || {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//   }
// );

// export default db;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection((err, conn) => {
  if (err) console.log(err);
  console.log("Connected successfully");
});

module.exports = pool.promise();
