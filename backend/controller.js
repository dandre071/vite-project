/* const pool = require("./db"); */
import { pool } from "./db.js";
/* import { queries } from "./queries.js"; */

export const getProducts = (req, response) => {
  pool.query("SELECT * FROM productos", (error, results) => {
    if (error) throw error;
  });
  response.status(200).json(results.rows);
};
/* module.exports = {
  getProducts,
}; */
