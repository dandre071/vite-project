/* import express from "express";
import { router } from "../backend/router.js"; */
import express, { json } from "express";
/* import { router } from "../backend/router.js"; */
import { Router } from "express";

const productos = Router;
const app = express();
const port = 3000;
app.use(json);
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/api/v1/productos", productos);

app.listen(port, () => console.log(`app listening in port ${port}`));
