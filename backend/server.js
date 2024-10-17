/* import express from "express";
import { router } from "../backend/router.js"; */
import express, { json } from "express";
import { router /* usersRouter  */ } from "../backend/router.js";

const impresosDB = router;
/* const users = usersRouter; */
const app = express();
const port = 3000;
app.use(json);
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/api/v1/impresosDB", impresosDB);
/* app.use("/api/v1/users", users); */
app.listen(port, () => console.log(`app listening in port ${port}`));
