import { Grid } from "@mui/material";
import React from "react";
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
const ProductTypeOptions = () => {
  return (
    <Grid lg={9} xs={9} md={9}>
      <Stack
        sx={{
          height: 55,
          marginLeft: 1,
          marginRight: 0,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
        item
        spacing={1}
        direction="row"
      >
        <ProductPriceModal
          colors={colors}
          text={"Producto"}
          acabado={acabados}
        />

        <ManualProductModal
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
          acabado={acabados}
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
  );
};

export default ProductTypeOptions;
