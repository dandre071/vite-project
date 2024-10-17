import { Router } from "express";
import * as express from "express";
import { pool } from "./db.js";
import { getProducts, getUsers } from "./controller.js";

/* const { Router } = require("express"); */
/* const controller = require("./controller"); */
export const router = express.Router();
/* export const usersRouter = express.Router(); */
router.get("/", getProducts);
router.get("/users", getUsers);

/* router.get("/", getProducts); */

/* router.get("/users", getUsers); */
/* router.get("/", (req, response) => {
  pool.query("SELECT * FROM productos", (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
}); */
/* module.exports = router;*/
