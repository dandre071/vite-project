import { Box, Input, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import ReadOnlyText from "../Text/ReadOnlyText";

const Factura = () => {
  return (
    <Stack
      spacing={1}
      sx={{
        width: "14cm",
        height: "21cm",
        bgcolor: "white",
        display: "grid",

        gridTemplateRows: "15% 15% 50% 20%",
      }}
    >
      {/*  <ReadOnlyText /> */}
      <Box sx={{ bgcolor: "red", width: "95%", heigth: "15%" }}></Box>
      <Box sx={{ bgcolor: "green", width: "95%", heigth: "15%" }}>
        <Stack sx={{ display: "grid", gridTemplateColumns: "1.2fr 1.2fr 1fr" }}>
          <Typography sx={{}}>Nombre / Razón Social</Typography>
          <Typography sx={{}}>NIT</Typography>
        </Stack>
      </Box>
      <Box sx={{ bgcolor: "blue", width: "95%", heigth: "50%" }}></Box>
      <Box sx={{ bgcolor: "yellow", width: "95%", heigth: "20%" }}></Box>
    </Stack>
  );
};

export default Factura;
