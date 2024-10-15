const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "Onepiece.07",
  host: "localhost",
  port: 5432,
  database: "impresosDB",
});

module.exports = client;
