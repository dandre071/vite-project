/* const pool = require("./db"); */
import { pool } from "./db.js";
/* import { queries } from "./queries.js"; */

export const getProducts = (req, response) => {
  pool.query("SELECT * FROM productos", (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
};

export const getUsers = (req, response) => {
  pool.query("SELECT * FROM vendedores", (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
};
export const getLaminatePrice = (req, response) => {
  pool.query("SELECT * FROM laminado", (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
};
export const getMaterialPrice = (req, response) => {
  pool.query("SELECT * FROM precio_material", (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
};
export const getVinylPrice = (req, response) => {
  pool.query("SELECT * FROM precio_vinilos", (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
};
/* console.log(users); */
/* module.exports = {
  getProducts,
}; */
