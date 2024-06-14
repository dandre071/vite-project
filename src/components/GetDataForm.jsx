import { useEffect, useState } from "react";

import Text from "./TextField";
import DatePickerComp from "./DatePicker";
import SelectField from "./SelectField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ListItem, Stack } from "@mui/material";

import ProductPriceModal from "./ProductPriceModal";
import ManualProductModal from "./ManualProductModal";
import AutoProductModal from "./AutoProductModal";
import VinylCutModal from "./VinylCutModal";
import { ThemeProvider } from "styled-components";
import { FormInputDate } from "./Forms/FormInputDate";

import {
  materialWidth,
  users,
  materials,
  acabados,
  userType,
  choice,
  vinyls,
  descolillado,
} from "./lists";

const colors = {
  main: "#0303b3",
  light: "#597fff",
  dark: "#00159a",
  warning: "#ffce2d",
  success: "#41f749",
  info: "#260987",
};

const GetDataForm = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);

    console.log(name);
  };

  const [formData, setFormData] = useState(
    {
      producto: "",
      precio: "",
      cantidad: 1,
      acabado: "",
      cantAcabado: 1,
      descripcion: "",
      precioTotal: null,
    } || []
  );
  const [products, setProducts] = useState(() => {
    let initial = JSON.parse(localStorage.getItem("products"));
    return initial;
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    JSON.parse(localStorage.getItem("products"));
  });

  const handleChangeData = (event) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  };

  function addProduct() {
    const newProduct = {
      ...formData,
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    return products;
  }

  const handleSubmitData = (e) => {
    e.preventDefault();
    addProduct();
    return products;
  };

  return (
    <Box sx={{ flexGrow: 1, minWidth: 160, width: 500 }}>
      <Grid container spacing={2.5} justifyContent={"end"}>
        <Grid sm={12} md={12} xs={8}>
          <Text item label={"Nombre"} value={name} onChange={handleChange} />
        </Grid>
        <Grid sm={12} xs={8} md={7}>
          <Text item label={"Email"} />
        </Grid>
        <Grid xs={12} md={5}>
          <Text item label={"Teléfono"} />
        </Grid>

        <Grid item xs={12} md={4}>
          <Text label={"NIT"} />
        </Grid>

        <Grid item xs={12} md={4}>
          <SelectField options={users} text={"Recibe"} label={"Recibe"} />
        </Grid>

        <Grid item xs={12} md={4}>
          <SelectField options={users} text={"Realiza"} label={"Recibe"} />
        </Grid>

        <Grid item xs={7} md={7}>
          <DatePickerComp label={"Fecha y hora recepción"} />
        </Grid>
        <Grid margin={0} item xs={5} md={5} lg={5}>
          <SelectField
            sx={{}}
            options={userType}
            text={"Tipo de cliente"}
            label={"Tipo de cliente"}
          />
        </Grid>
        <Grid item xs={7} md={7} lg={7}>
          <DatePickerComp label={"Fecha y hora Entrega"} />
        </Grid>
        <Grid item xs={5} md={5} lg={5} justifySelf={"end"}>
          <SelectField
            sx={{}}
            options={userType}
            text={"Tipo de cliente"}
            label={"Tipo de cliente"}
          />
        </Grid>
        <Grid item lg={12} xs={12} md={12}>
          <Stack
            sx={{
              height: 55,
              borderStyle: "solid",
              borderWidth: 1,
              borderRadius: 2,
              marginRight: 0,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              p: 2,
            }}
            spacing={1}
            direction="row"
          >
            <ProductPriceModal
              colors={colors}
              text={"Producto"}
              acabado={acabados}
            />

            <ManualProductModal
              onSubmit={handleChangeData}
              choice={choice}
              text={"Producto Manual"}
              acabado={acabados}
            />

            <AutoProductModal
              text={"Auto"}
              matSize={materialWidth}
              material={materials}
              choice={choice}
              colors={colors}
              options={acabados}
            />

            <VinylCutModal
              text={"Corte en vinilo"}
              materials={vinyls}
              choice={choice}
              descolillado={descolillado}
              colors={{ colors }}
            />
          </Stack>
        </Grid>
      </Grid>
      {/* <Box>
        {[...products].map((product) => (
          <Box key={product.index}>
            <Grid container sx={{ flexGrow: 1, p: 0, m: 0 }}>
              <Grid item sm={12}>
                <ListItem>{product.producto}</ListItem>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box> */}
    </Box>
  );
};

export default GetDataForm;
