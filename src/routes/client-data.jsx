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

import PersonalData from "../components/pages/PersonalData";
import ModalHeader from "../components/ModalHeader";
import { usePersonalData } from "../store/shoppingCart";
import { modal } from "../Styles/styles";

const ClientData = () => {
  const personalData = usePersonalData((state) => state.personalData);
  // console.log(personalData[0].billType);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Box className="modal" sx={modal}>
        <ModalHeader title={"Información del Cliente"} />
        <PersonalData />
      </Box>
    </Box>
  );
};

export default ClientData;
