const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "impresosDB",
  password: "laboriosidad",
  port: 5432,
});
module.exports = pool;
