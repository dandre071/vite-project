/* import express from "express";
import { router } from "../backend/router.js"; */
import express, { json } from "express";

import { router /* usersRouter  */ } from "../backend/router.js";
import cors from "cors";
import bodyParser from "body-parser";
const impresosDB = router;
/* const users = usersRouter; */
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:80"],
};

const app = express();
const port = 3000;
/* app.use(json); */
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/api/v1/impresosDB", impresosDB);
/* app.use("/api/v1/users", users); */
app.listen(port, () => console.log(`app listening in port ${port}`));
