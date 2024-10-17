import pg from "pg";
export const { Pool } = pg;
/* const Pool = require("pg").Pool; */
export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "impresosDB",
  password: "laboriosidad",
  port: 5432,
});

/* module.exports = pool; */
/* export default pool; */
