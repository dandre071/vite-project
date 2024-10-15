/* import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => console.log(port)); */
/* import postgres from "postgres";
const sql = postgres("postgres://username:password@host:port/database", {
  user: "postgres",
  password: "Onepiece.07",
  host: "localhost",
  port: 5432,
  database: "impresosDB",
});
export default sql; */
/* import express from "express";
import { Client } from "pg";

const app = express();
const port = 3000;

export const client = new Client({
  user: "postgres",
  password: "Onepiece.07",
  host: "localhost",
  port: 5432,
  database: "impresosDB",
});

client.connect();

app.get("/productos", async (req, res) => {
  const { rows } = await client.query(
    `SELECT * from productos`,
    res.send(rows)
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

client.query("SELECT * FROM users", (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(res.rows);
  client.end();
});
 */
/* import { Client } from "node-postgres";

const client = new Client({
  user: "postgres",
  password: "Onepiece.07",
  host: "localhost",
  port: 5432,
  database: "impresosDB",
});
export const app = client()(async () => {
  await client.connect();

  const res = await client.query("SELECT * from products");
  console.log(res);
  await client.end();
})().catch(console.error); */
import client from "./client.js";
/* const client = require("./client.js"); */
import express from "express";
/* const bodyParser = require("body-parser"); */
import bodyParser from "body-parser";
/* const express = require("express"); */
const app = express();

app.listen(3000, () => {
  console.log("Sever is now listening at port 3000");
});

client.connect();

app.use(bodyParser.json());

app.get("/productos", (req, res) => {
  client.query(`Select * from productos`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});
client.connect();
