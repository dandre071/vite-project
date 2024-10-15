/* import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => console.log(port)); */
import postgres from "postgres";
const sql = postgres("postgres://username:password@host:port/database", {
  user: "postgres",
  password: "Onepiece.07",
  host: "localhost",
  port: 5432,
  database: "impresosDB",
});
export default sql;
