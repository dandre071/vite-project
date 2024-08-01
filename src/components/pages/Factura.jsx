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
            // bgcolor: "purple",
            display: "grid",
            gridTemplateRows: "2.5cm 2.5cm 12cm 3.5cm",
            //gap: 0.5,
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
            container
            sx={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              // width: "90%",
              bgcolor: "white",
              gridTemplateColumns: "10cm 4cm",
              border: "1px solid black",
              borderRadius: 2.5,
            }}
          >
            <Stack spacing={1} direction={"column"} sx={{ width: "100%" }}>
              <TextField
                className="invoice-input"
                InputLabelProps={{
                  style: {
                    fontSize: 14,
                    padding: 0,
                  },
                }}
                fullWidth={false}
                variant="filled"
                size="small"
                label={"Nombre / Razón Social"}
                InputProps={{
                  style: {
                    //height: 40,

                    fontSize: 9,
                    bgcolor: "white",
                    padding: 0,
                  },
                  label: {
                    fontSize: 5,
                    padding: 0,
                  },
                }}
                sx={{ width: "98%", bgcolor: "white", p: 0 }}
              />
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
                label={"Email"}
                InputProps={{ style: { fontSize: 10 } }}
                sx={{ width: "98%" }}
              />
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
          <Stack
            sx={{ width: "100%", height: "100%", bgcolor: "blue" }}
          ></Stack>
        </Box>
      </Stack>
    </form>
  );
};

export default Factura;
