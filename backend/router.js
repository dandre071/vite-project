import { Router } from "express";
import * as express from "express";
import { pool } from "./db.js";
import {
  createProduct,
  getLaminatePrice,
  getMaterialPrice,
  getProducts,
  getUsers,
  getVinylPrice,
} from "./controller.js";

export const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
//IMPRESOS SERVER
/* router.get("/users" || "/vendedores", getUsers);
router.get("/laminado", getLaminatePrice);
router.get("/precio-material" || "/precios", getMaterialPrice);
router.get("/precio-vinilo" || "/vinilos", getVinylPrice); */

//HOME SERVER
router.get("/vendedores", getUsers);
router.get("/laminado", getLaminatePrice);
router.get("/precios", getMaterialPrice);
router.get("/vinilos", getVinylPrice);
