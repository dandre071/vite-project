import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import array from "../db";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
const options = array;
const colPesos = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
});

const ProductSearchInput = () => {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

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
        <div
          className="price-holder"
          style={{
            textAlign: "right",
            fontSize: 25,
            fontWeight: 700,
            color: "#f10000",
          }}
        >
          {value !== null && ` ${colPesos.format(value.price)}`}
        </div>
      </Grid>
    </Grid>
  );
};

export default ProductSearchInput;
