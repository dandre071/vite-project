import React from "react";

import Text from "./TextField";
import DatePickerComp from "./DatePicker";
import SelectField from "./SelectField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";

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

        <Grid item xs={12} md={6}>
          <DatePickerComp label={"Fecha y hora recepción"} />
        </Grid>

        <Grid item xs={12} md={6}>
          <DatePickerComp label={"Fecha y hora Entrega"} />
        </Grid>

        <Grid xs={3} md={2}>
          <SelectField
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
            <Button sx={{ wordWrap: false }} variant="outlined">
              Producto
            </Button>
            <Button variant="string">Entrada Manual</Button>
            <Button variant="outlined">Entrada Automática</Button>
            <Button variant="outlined">Corte en Vinilo</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetDataForm;
