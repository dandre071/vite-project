import React from "react";

import Text from "./TextField";
import DatePickerComp from "./DatePicker";
import SelectField from "./SelectField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import ProductPriceModal from "./ProductPriceModal";
import ManualProductModal from "./ManualProductModal";
import AutoProductModal from "./AutoProductModal";
import VinylCutModal from "./VinylCutModal";

const colors = {
  main: "#0303b3",
  light: "#597fff",
  dark: "#00159a",
  warning: "#ffce2d",
  success: "#41f749",
  info: "#260987",
};

const materialWidth = [60, 70, 105, 125, 150, 160];
const vinyls = [
  "Vinilo",
  "Vinilo Reflectivo",
  "Vinilo Rosado",
  "Vinilo Holograma",
  "Vinilo Letras Chinas",
  "Vinilo Espejo",
  "Vinilo Fluorescente",
];
const choice = ["Si", "No"];
const descolillado = ["Grande", "Pequeño"];
const materials = [
  "Banner",
  "Adhesivo",
  "Panaflex",
  "Reflectivo",
  "Microperforado",
  "Lienzo",
  "Aviso Con Estructura",
  "Aviso Luminoso",
  "Aviso Luminoso 2 Caras",
  "Retablo",
  "Adhesivo + Acrílico (Pequeño)",
  "Adhesivo + Acrílico (Grande)",
];

const users = [
  " ",
  "Alejandra",
  "Angélica",
  "Angi",
  "Dayana",
  "Diego",
  "Gladys Sofìa",
  "Haylin",
  "Laura",
  "Loraine",
  "Olga",
  "Oswaldo",
  "Seidy",
  "Servando",
  "Yulieth",
];

const acabados = [
  "Sin acabado",
  "Tubos",
  "Ojales",
  "Palos",
  "Bolsillos",
  "Laminado",
];

const userType = ["Particular", "Publicista"];

const GetDataForm = () => {
  return (
    <Box sx={{ flexGrow: 1, minWidth: 160, width: 600 }}>
      <Grid container spacing={2}>
        <Grid sm={12} md={12} xs={8}>
          <Text item label={"Nombre"} />
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

        <Grid item xs={6} md={6}>
          <DatePickerComp label={"Fecha y hora recepción"} />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <DatePickerComp label={"Fecha y hora Entrega"} />
        </Grid>

        <Grid xs={3} md={3} lg={3}>
          <SelectField
            sx={{}}
            item
            options={userType}
            text={"Tipo de cliente"}
            label={"Tipo de cliente"}
          />
        </Grid>
        <Grid lg={9} xs={9} md={9}>
          <Stack
            sx={{ height: 55, marginLeft: 1, marginRight: 0 }}
            item
            spacing={1}
            direction="row"
          >
            <Button
              sx={{ wordWrap: false, fontSize: 12, border: 2 }}
              variant="outlined"
            >
              <ProductPriceModal
                colors={colors}
                text={"Producto"}
                acabado={acabados}
              />
            </Button>

            <Button sx={{ fontSize: 12 }} variant="outlined">
              <ManualProductModal
                choice={choice}
                text={"Producto Manual"}
                acabado={acabados}
              />
            </Button>
            <Button sx={{ fontSize: 12 }} variant="outlined">
              <AutoProductModal
                text={"Auto"}
                matSize={materialWidth}
                material={materials}
                choice={choice}
                colors={colors}
                acabado={acabados}
              />
            </Button>
            <Button
              sx={{ fontSize: 12, color: "white" }}
              variant="contained"
              type="submit"
            >
              <VinylCutModal
                text={"Corte en vinilo"}
                materials={vinyls}
                choice={choice}
                descolillado={descolillado}
                colors={{ colors }}
              />
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetDataForm;
