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
          gridTemplateRows: "2.5cm 2.5cm 12cm 3.5cm",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/*  <Box
          sx={{
            width: "13cm",

            bgcolor: "purple",
            display: "grid",
            gridTemplateRows: "2.5cm 2.5cm 12cm 3.5cm",
            //gap: 0.5,
          }}
        > */}
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "red",
            display: "grid",
          }}
        ></Stack>
        <Stack
          sx={{
            display: "grid",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            width: "95%",
            bgcolor: "white",
            justifyContent: "center",
            alignItems: "center",
            placeItems: "center",
            justifySelf: "center",
            gridTemplateColumns: "70% 30%",
            border: "1px solid black",
            borderRadius: 2.5,
          }}
        >
          <Stack spacing={0.5} direction={"column"} sx={{ width: "90%" }}>
            <Box>
              <Typography
                className="invoice-input"
                sx={{
                  width: "98%",
                  marginBottom: -0.5,
                  p: 0,

                  fontSize: 11,
                }}
              >
                Nombre / Razón Social:
              </Typography>
              <Input
                disableUnderline
                className="invoice-input"
                fullWidth
                sx={{
                  height: 19,
                  textTransform: "capitalize",
                  // bgcolor: "grey",
                  fontSize: 13,
                  fontWeight: 600,
                  p: 0,
                }}
              />
            </Box>

            <Box>
              <Typography
                className="invoice-input"
                sx={{
                  width: "98%",
                  // bgcolor: "red",
                  p: 0,

                  fontSize: 11,
                }}
              >
                Email:
              </Typography>
              <Input
                disableUnderline
                className="invoice-input"
                fullWidth
                sx={{
                  height: 20,
                  textTransform: "capitalize",
                  // bgcolor: "grey",
                  fontSize: 14,
                  fontWeight: 600,
                  p: 0,
                }}
              />
            </Box>
          </Stack>
          <Stack direction={"column"} sx={{ width: "100%" }}>
            <TextField
              InputLabelProps={{
                style: {
                  fontSize: 14,
                  padding: 0,
                },
              }}
              className="invoice-input"
              fullWidth={false}
              variant="filled"
              size="small"
              label={"NIT"}
              InputProps={{
                disableUnderline: false,
                style: { fontSize: 10, p: 0 },
              }}
              sx={{ width: "98%" /* border: "1px solid black", p: 0 */ }}
            />
            <TextField
              InputLabelProps={{
                style: {
                  fontSize: 14,
                  padding: 0,
                  color: "red",
                },
              }}
              className="invoice-input"
              fullWidth={false}
              variant="filled"
              size="small"
              label={"Teléfono"}
              InputProps={{ style: { fontSize: 10 } }}
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
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "orange",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: "1cm 7cm 1cm 2.5cm 2.5cm",
              bgcolor: "black",
              width: "100%",
              height: ".8cm",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ fontSize: 12, color: "white", justifySelf: "center" }}
            >
              Item
            </Typography>
            <Typography sx={{ fontSize: 12, color: "white" }}>
              Concepto
            </Typography>
            <Typography
              sx={{ fontSize: 12, color: "white", justifySelf: "center" }}
            >
              Cant
            </Typography>
            <Typography
              sx={{ fontSize: 12, color: "white", justifySelf: "right" }}
            >
              Precio
            </Typography>
            <Typography
              sx={{ fontSize: 12, color: "white", justifySelf: "right" }}
            >
              Total
            </Typography>
          </Stack>
        </Stack>
        <Stack sx={{ width: "100%", height: "100%", bgcolor: "blue" }}></Stack>
        {/*  </Box> */}
      </Stack>
    </form>
  );
};

export default Factura;
