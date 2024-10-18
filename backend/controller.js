/* const pool = require("./db"); */
import { pool } from "./db.js";
/* import { queries } from "./queries.js"; */

export const getProducts = (req, response) => {
  pool.query("SELECT * FROM productos", (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
    console.log(results.rows);
  });
};
let users;
export const getUsers = (req, response) => {
  pool.query("SELECT * FROM vendedores", (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
};
/* console.log(users); */
/* module.exports = {
  getProducts,
}; */
