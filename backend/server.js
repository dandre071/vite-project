const express = require("express");
const impresosDb = require("../backend/router");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello");
});
app.use("api/v1/impresos", impresosDb);

app.listen(port, () => console.log(`app listening in port ${port}`));
