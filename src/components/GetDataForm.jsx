import React from "react";

import Text from "./TextField";
import DatePickerComp from "./DatePicker";
import SelectField from "./SelectField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button } from "@mui/material";
import ButtonG from "./Button";
import { WrapText } from "@mui/icons-material";

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

        <Grid item xs={12} md={6} lg={6}>
          <DatePickerComp label={"Fecha y hora Entrega"} />
        </Grid>
        <Grid lg={9} xs={9} md={9}>
          <ButtonG sx={{ margin: 0 }} item />
        </Grid>
        <Grid item lg={3} xs={3} md={3}>
          <SelectField
            sx={{ width: 50, WrapText: true }}
            options={userType}
            text={"Tipo de cliente"}
            label={"Tipo de cliente"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetDataForm;
