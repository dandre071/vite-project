import { Box, Input, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import ReadOnlyText from "../Text/ReadOnlyText";
import { title } from "../../Styles/styles";
import { customTheme } from "../../Hooks/useCustomTheme";
import InvoiceListItem from "../InvoiceListItem";
import { formatPhoneNumber } from "../utils/helpers";

const Factura = () => {
  return (
    <Stack
      spacing={1}
      sx={{
        width: "14cm",
        height: "21cm",
        bgcolor: "white",
        display: "grid",

        gridTemplateRows: "15% 15% 55% 15%",
      }}
    >
      {/*  <ReadOnlyText /> */}
      <Box sx={{ bgcolor: "red", width: "95%" }}></Box>

      <Box
        sx={{
          width: "95%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //  bgcolor: "yellow",
          borderRadius: 3,
          border: "2px solid black",
          p: 0,
        }}
      >
        <Box sx={{ width: "95%" }}>
          <Box>
            <Stack
              sx={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr" }}
            >
              <Typography sx={title}>Nombre / Razón Social</Typography>
              <Typography sx={{ ...title, width: 50 }}>NIT</Typography>
              <Typography sx={{ ...title, width: 50 }}>Recibe</Typography>
            </Stack>
            <Stack
              sx={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr" }}
            >
              <Typography sx={{}}>Nombre / Razón Social</Typography>
              <Typography sx={{}}>NIT</Typography>
              <Typography sx={{}}>Recibe</Typography>
            </Stack>
          </Box>
          <Box>
            <Stack
              sx={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr" }}
            >
              <Typography sx={{ ...title, width: 40 }}>Email</Typography>
              <Typography sx={{ ...title, width: 50 }}>Teléfono </Typography>
              <Typography sx={{ ...title, width: 50 }}>Realiza</Typography>
            </Stack>
            <Stack
              sx={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr" }}
            >
              <Typography sx={{}}>Nombre / Razón Social</Typography>
              <Typography sx={{}}>{formatPhoneNumber(3206598822)}</Typography>
              <Typography sx={{}}>Recibe</Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "blue",
          width: "95%",
          heigth: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          top: 10,
          borderRadius: 2,
        }}
      >
        <Stack
          sx={{
            bgcolor: customTheme.palette.background.dark,
            width: "95%",
            height: 25,
            borderRadius: 2,
            position: "absolute",
            top: -15,
            display: "grid",

            gridTemplateColumns: "50px 200px 50px 100px 100px",
          }}
        >
          <Typography
            sx={{ fontSize: 14, justifySelf: "center", alignSelf: "center" }}
          >
            Item
          </Typography>
          <Typography
            sx={{ fontSize: 14, justifySelf: "start", alignSelf: "center" }}
          >
            Descripción
          </Typography>
          <Typography
            sx={{ fontSize: 14, justifySelf: "center", alignSelf: "center" }}
          >
            Cant
          </Typography>
          <Typography
            sx={{ fontSize: 14, justifySelf: "center", alignSelf: "center" }}
          >
            Precio
          </Typography>
          <Typography
            sx={{ fontSize: 14, justifySelf: "center", alignSelf: "center" }}
          >
            Total
          </Typography>
        </Stack>
        <Stack sx={{ width: "98%", height: "95%", bgcolor: "red" }}>
          <InvoiceListItem />
        </Stack>
      </Box>
      <Box sx={{ bgcolor: "yellow", width: "95%", heigth: "20%" }}></Box>
    </Stack>
  );
};

export default Factura;
