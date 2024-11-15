import { Router } from "express";
import * as express from "express";
import { pool } from "./db.js";
import {
  createProduct,
  createRegister,
  /*  getLaminatePrice, */
  /*   getMaterialPrice, */
  getProducts,
  getRegById,
  getRegister,
  searchByName,
  /*  getUsers,
  getVinylPrice, */
  updateReg,
} from "./controller.js";

export const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);
//IMPRESOS SERVER
/* router.put("/registro/:id", updateReg);
router.get("/registro", getRegister);
router.get("/registro/:id", getRegById);
router.get("/search", searchByName);
router.post("/registro", createRegister); */

////////////////////////////////////////////////
/* router.get("/users" || "/vendedores", getUsers);
router.get("/laminado", getLaminatePrice);
router.get("/precio-material" || "/precios", getMaterialPrice);
router.get("/precio-vinilo" || "/vinilos", getVinylPrice); */

///////////////////////////////////////////////
//HOME SERVER
/* router.get("/vendedores", getUsers); */
/* router.get("/laminado", getLaminatePrice); */
/* router.get("/precios", getMaterialPrice);
router.get("/vinilos", getVinylPrice); */
//////////////////////////////////////////
router.get("/registro", getRegister);
router.get("/registro/:id", getRegById);
router.post("/registro", createRegister);
router.put("/registro/:id", updateReg);
router.get("/search", searchByName);
