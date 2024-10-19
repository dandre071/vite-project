/* const pool = require("./db"); */
import { pool } from "./db.js";
/* import { queries } from "./queries.js"; */

export const getProducts = (req, response) => {
  pool.query("SELECT * FROM productos", (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
};
/* export const getProductsLastId = (req, response) => {
  pool.query("SELECT MAX(id) * FROM productos", (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
}; */
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

export const createProduct = (request, response) => {
  const { id, producto, precio } = request.body;

  pool.query(
    "INSERT INTO productos (id,producto, precio) VALUES ($1, $2, $3) RETURNING *",
    [id, producto, precio],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};
/* console.log(users); */
/* module.exports = {
  getProducts,
}; */
