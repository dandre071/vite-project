import { useEffect, useState } from "react";

import Text from "./TextField";
import DatePickerComp from "./DatePicker";
import SelectField from "./SelectField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ListItem, Stack } from "@mui/material";

import ProductPriceModal from "./ProductPriceModal";

import AutoProductModal from "./AutoProductModal";
import VinylCutModal from "./VinylCutModal";
import { ThemeProvider } from "styled-components";
import { FormInputDate } from "./Forms/FormInputDate";
import ManualInput from "./modals/manualInput";
/* import {
  materialWidth,
  users,
  materials,
  acabados,
  userType,
  choice,
  vinyls,
  descolillado,
} from "./lists"; */

import ManualInput2 from "./modals/manualInput copy";
import { customTheme } from "../Hooks/useCustomTheme";
import { options } from "./utils/options";
import PersonalData from "./pages/PersonalData";
import ModalHeader from "./ModalHeader";
import { usePersonalData } from "../store/shoppingCart";

const colors = {
  main: "#0303b3",
  light: "#597fff",
  dark: "#00159a",
  warning: "#ffce2d",
  success: "#41f749",
  info: "#260987",
};

const GetDataForm = () => {
  const personalData = usePersonalData((state) => state.personalData);
  // console.log(personalData[0].billType);
  return (
    <Box
      sx={{
        flexGrow: 1,
        minWidth: 160,
        width: 500,
        bgcolor: "white",
        p: 3,
        borderRadius: customTheme.shape.borderRadius,
        boxShadow: 4,
      }}
    >
      <ModalHeader title={"Información del Cliente"} />
      <PersonalData />
      {personalData[0] && (
        <Stack
          direction={"row"}
          spacing={3}
          sx={{
            //borderStyle: "solid",
            borderWidth: 1,
            borderRadius: 2,
            bgcolor: "white",
            display: "flex",
            flexDirection: "row",
            // gridTemplateColumns: "repeat(2, 1fr)",
            justifyContent: "center",
            //  placeItems: "center",
            // p: 2,
          }}

          // direction="column"
        >
          {/* <ProductPriceModal
              colors={colors}
              text={"Producto"}
              acabado={acabados}
            /> */}

          <AutoProductModal
            text={"Auto"}
            matSize={options.materialWidth}
            material={options.materials}
            choice={options.choice}
            colors={colors}
            options={options.acabados}
          />

          <VinylCutModal
            text={"Corte en vinilo"}
            materials={options.vinyls}
            choice={options.choice}
            descolillado={options.descolillado}
            colors={{ colors }}
          />

          <ManualInput2
            // onSubmit={handleChangeData}
            choice={options.choice}
            text={"Manual input"}
            acabado={options.acabados}
          />
        </Stack>
      )}
    </Box>
  );
};

export default GetDataForm;
