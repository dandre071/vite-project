import { useEffect, useState } from "react";

import Text from "../components/TextField";
import DatePickerComp from "../components/DatePicker";
import SelectField from "../components/SelectField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ListItem, Stack } from "@mui/material";

import ProductPriceModal from "../components/ProductPriceModal";

import AutoProductModal from "../components/AutoProductModal";
import VinylCutModal from "../components/VinylCutModal";
import { ThemeProvider } from "styled-components";
import { FormInputDate } from "../components/Forms/FormInputDate";
import ManualInput from "../components/modals/manualInput";
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

import ManualInput2 from "../components/modals/manualInput copy";
import { customTheme } from "../Hooks/useCustomTheme";
import { options } from "../components/utils/options";
import PersonalData from "../components/pages/PersonalData";
import ModalHeader from "../components/ModalHeader";
import { usePersonalData } from "../store/shoppingCart";
import { modal } from "../Styles/styles";
const colors = {
  main: "#0303b3",
  light: "#597fff",
  dark: "#00159a",
  warning: "#ffce2d",
  success: "#41f749",
  info: "#260987",
};

const ClientData = () => {
  const personalData = usePersonalData((state) => state.personalData);
  // console.log(personalData[0].billType);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Box sx={modal}>
        <ModalHeader title={"Información del Cliente"} />
        <PersonalData />
      </Box>
      <Box>
        {personalData[0] && (
          <Stack
            direction={"row"}
            spacing={2}
            sx={modal}

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
    </Box>
  );
};

export default ClientData;
