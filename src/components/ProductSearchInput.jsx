import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import array from "../db";
import { Box, Button, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { useEffect } from "react";
/* import { productList } from "../fetchHooks/fetchProducts"; */
const colPesos = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
});
/* const options = productList; */
const ProductSearchInput = () => {
  const [productList, setProductList] = useState(null);
  const [price, setPrice] = useState(null);
  useEffect(() => {
    const getProductList = async () => {
      await fetch("http://localhost:3000/api/v1/impresosDB/")
        .then((res) => res.json())
        .then((data) => {
          setProductList(data);
        });
    };
    getProductList();
  }, []);
  const options = productList || null;

  const [value, setValue] = useState(options);
  const [inputValue, setInputValue] = useState("");

  const prices = productList ? productList.map((x) => x.precio) : 0;
  const products = productList ? productList.map((x) => x.producto) : "";
  const index = products.indexOf(value);
  console.log(inputValue);
  const getPrice = () => {
    const price = prices[index];
    setPrice(price);
  };
  console.log(prices[index]);

  return (
    <Grid container spacing={2} sx={{ alignItems: "center" }}>
      <Grid item sm={12}>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            console.log(typeof value);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          on
          id="controllable-states-demo"
          options={options && options.map((x) => x.producto)}
          fullWidth
          renderInput={(params) => <TextField {...params} label="Productos" />}
        />
        <Button onClick={getPrice}>OK</Button>
      </Grid>
      <Grid item sm={3}>
        <TextField label={"Cant"} type="number" sx={{ alignSelf: "end" }} />
      </Grid>
      <Grid item sm={4} style={{ textAlign: "right" }}>
        <div>Valor del Producto:</div>
      </Grid>
      <Grid item sm={5}>
        <Box
          className="price-holder"
          sx={{
            textAlign: "right",
            fontSize: 25,
            fontWeight: 700,
            color: "secondary",
          }}
          color={"primary"}
        >
          {value !== null && ` ${colPesos.format(price)}`}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductSearchInput;
