import { Router } from "express";
import { getProducts } from "./controller.js";
/* const { Router } = require("express"); */
/* const controller = require("./controller"); */
export const router = Router();

router.get("/", getProducts);
/* module.exports = router; */
