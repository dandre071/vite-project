import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import array from "../db";
import { Box, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { useEffect } from "react";

const colPesos = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
});
/* const options = productList; */
const ProductSearchInput = () => {
  const [productList, setProductList] = useState(null);
  useEffect(() => {
    const getProductList = () => {
      fetch("http://localhost:3000/api/v1/impresosDB/")
        .then((res) => res.json())
        .then((data) => {
          setProductList(data);
        });
    };
    getProductList();
  }, []);
  const options = productList.map((x) => x.producto);
  console.log();
  const [value, setValue] = useState(options);
  const [inputValue, setInputValue] = useState("");
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
          options={options}
          fullWidth
          renderInput={(params) => <TextField {...params} label="Productos" />}
        />
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
          {value !== null && ` ${colPesos.format(value.price)}`}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductSearchInput;
