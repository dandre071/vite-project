import { Box, Input, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import ReadOnlyText from "../Text/ReadOnlyText";
import { title } from "../../Styles/styles";
import { customTheme } from "../../Hooks/useCustomTheme";
import InvoiceListItem from "../InvoiceListItem";
import { formatPhoneNumber } from "../utils/helpers";

const Factura = () => {
  return (
    <form>
      <Stack
        sx={{
          width: "14cm",
          height: "21cm",
          bgcolor: "white",
          display: "grid",
        }}
      >
        <Box
          sx={{
            width: "13.5cm",
            height: "90%",
            bgcolor: "purple",
            display: "grid",
            gridTemplateRows: "3cm 3cm 12cm 3.5cm",
            gap: 0.5,
          }}
        >
          <Stack
            sx={{
              width: "100%",
              height: "100%",
              bgcolor: "red",
              display: "grid",
            }}
          ></Stack>
          <Stack
            constainer
            sx={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              // bgcolor: "blue",
              gridTemplateColumns: "10cm 4cm",
              border: "1px solid black",
              borderRadius: 2.5,
            }}
          >
            <Stack spacing={1} direction={"column"} sx={{ width: "100%" }}>
              <TextField
                fullWidth={false}
                variant="filled"
                size="small"
                label={"Nombre / Razón Social"}
                InputProps={{ style: { fontSize: 16 } }}
                sx={{ width: "98%" }}
              />
              <TextField
                fullWidth={false}
                variant="filled"
                size="small"
                label={"Email"}
                InputProps={{ style: { fontSize: 16 } }}
                sx={{ width: "98%" }}
              />
            </Stack>
            <Stack spacing={1} direction={"column"} sx={{ width: "100%" }}>
              <TextField
                fullWidth={false}
                variant="filled"
                size="small"
                label={"NIT"}
                InputProps={{ style: { fontSize: 16 } }}
                sx={{ width: "98%" }}
              />
              <TextField
                fullWidth={false}
                variant="filled"
                size="small"
                label={"Teléfono"}
                InputProps={{ style: { fontSize: 16 } }}
                sx={{ width: "98%" }}
              />
            </Stack>
            {/*  <Stack
            spacing={1}
            direction={"column"}
            sx={{ width: "100%", bgcolor: "purple" }}
          >
            <TextField
              fullWidth={false}
              variant="filled"
              size="small"
              label={"Nombre / Razón Social"}
              InputProps={{ style: { fontSize: 16 } }}
              sx={{ width: "98%" }}
            />
            <TextField
              fullWidth={false}
              variant="filled"
              size="small"
              label={"Nombre / Razón Social"}
              InputProps={{ style: { fontSize: 16 } }}
              sx={{ width: "98%" }}
            />
          </Stack> */}
          </Stack>
          <Stack
            sx={{ width: "100%", height: "100%", bgcolor: "orange" }}
          ></Stack>
          <Stack
            sx={{ width: "100%", height: "100%", bgcolor: "blue" }}
          ></Stack>
        </Box>
      </Stack>
    </form>
  );
};

export default Factura;
