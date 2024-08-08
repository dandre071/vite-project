import {
  Box,
  Divider,
  Input,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ReadOnlyText from "../Text/ReadOnlyText";
import { title } from "../../Styles/styles";
import { customTheme } from "../../Hooks/useCustomTheme";
import InvoiceListItem from "../InvoiceListItem";
import { formatPhoneNumber } from "../utils/helpers";
import FormSelect2 from "../Forms/FormSelect2";
import useUsers from "../../Hooks/useUsers";
import supabase from "../../config/supabaseClient";

const Factura = () => {
  const users = useUsers();
  const date = new Date();
  const fullDate = new Intl.DateTimeFormat("es-CO", {
    dateStyle: "medium",
    timeStyle: "short",
    // timeZone: "Colombia/Bogotá",
  }).format(date);
  console.log(fullDate);
  console.log(users.users);

  return (
    <form>
      <Stack
        sx={{
          width: "14cm",
          height: "21cm",
          bgcolor: "white",

          display: "grid",
          gridTemplateRows: "2cm 2.1cm 12.5cm 3.5cm",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          className="invoice-header"
          sx={{
            width: "100%",
            height: "100%",

            display: "grid",
            gridTemplateColumns: "50% 1fr",
          }}
        >
          <Stack></Stack>

          <Stack
            spacing={0}
            sx={{
              padding: 0,
              display: "grid",
              gridTemplateRows: "1fr 1fr",
              // bgcolor: "red",
            }}
          >
            <Box>
              <Typography variant="h6" className="invoice-label" sx={{}}>
                RECIBO
              </Typography>
            </Box>
            <Stack sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <Box sx={{ borderRight: "1px solid black" }}>
                <Typography variant="h6" className="invoice-label" sx={{}}>
                  Fecha Recepción
                </Typography>
                <Typography variant="h6" className="invoice-data-date " sx={{}}>
                  {fullDate}
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" className="invoice-label" sx={{}}>
                  Fecha Entrega
                </Typography>
                <Typography variant="h6" className="invoice-data-date" sx={{}}>
                  {fullDate}
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            bgcolor: "#f0f0f0",
            width: "100%",
            height: "100%",
          }}
        >
          <Stack
            sx={{
              display: "grid",
              width: "95%",
              spacing: 1,

              //bgcolor: "green",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,

              justifySelf: "center",
              gridTemplateColumns: "60% 25% 15%",
            }}
          >
            <Stack direction={"column"} sx={{}}>
              <Box>
                <Typography variant="h6" className="invoice-label" sx={{}}>
                  Nombre / Razón Social:
                </Typography>
                <Typography variant="h6" className="invoice-data" sx={{}}>
                  PINTURAS DE ARMANDO PAREDES SALAS
                </Typography>
              </Box>

              <Box>
                <Typography
                  className="invoice-label"
                  sx={{
                    width: "98%",
                    // bgcolor: "red",
                    p: 0,

                    fontSize: 11,
                  }}
                >
                  Email:
                </Typography>
                <Typography className="invoice-data">sdsdsdsdsdsd</Typography>
              </Box>
            </Stack>

            <Stack spacing={0.5} direction={"column"} sx={{ width: "90%" }}>
              <Box>
                <Typography variant="h6" className="invoice-label">
                  NIT:
                </Typography>
                <Typography variant="h6" className="invoice-data">
                  320 659 8822
                </Typography>
              </Box>

              <Box>
                <Typography className="invoice-label">Teléfono:</Typography>
                <Typography variant="h6" className="invoice-data">
                  320 659 8822
                </Typography>
              </Box>
            </Stack>
            <Stack spacing={0.5} direction={"column"}>
              <Box>
                <Typography variant="h6" className="invoice-label">
                  Recibe:
                </Typography>
                <Typography className="invoice-data">Diego</Typography>
              </Box>

              <Box>
                <Typography variant="h6" className="invoice-label">
                  Realiza:
                </Typography>
                <Typography className="invoice-data">Diego</Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>

        <Stack
          sx={{
            height: "100%",
            width: "98%",
            // bgcolor: "orange",
            display: "flex",
            alignItems: "center",
            justifySelf: "center",
            borderBottom: `2px solid ${customTheme.palette.primary.main}`,
          }}
        >
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: "8cm 1cm 2.5cm 2.5cm",

              width: "98%",
              height: ".8cm",
              alignItems: "end",
              justifyContent: "center",
              borderBottom: `2px solid ${customTheme.palette.primary.main}`,
            }}
          >
            <Typography className="invoice-title">Concepto</Typography>
            <Typography
              className="invoice-title"
              sx={{ justifySelf: "center" }}
            >
              Cant
            </Typography>
            <Typography className="invoice-title" sx={{ justifySelf: "right" }}>
              Precio
            </Typography>
            <Typography
              className="invoice-title"
              sx={{ justifySelf: "right", pr: 1 }}
            >
              Total
            </Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            // bgcolor: "blue",
            display: "grid",
            gridTemplateColumns: "1fr 4.5cm",
          }}
        >
          <Stack
            sx={{
              //bgcolor: "#f1f1f1",
              width: "90%",
              height: "90%",
              display: "grid",
              gridTemplateRows: "60% 1fr",
              justifySelf: "center",
              alignSelf: "center",
            }}
          >
            <Stack
              sx={{
                //bgcolor: "red",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                height: "100%",
                justifyContent: "center",

                gap: 0,
              }}
            >
              <Stack className="box">
                <Typography className={"invoice-label-cash"}>
                  Revisa Valores
                </Typography>
              </Stack>

              <Stack className="box">
                <Typography className={"invoice-label-cash"}>
                  Entrega
                </Typography>
              </Stack>
              <Stack className="box">
                <Typography className={"invoice-label-cash"}>Cajero</Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                //  bgcolor: "green",
                display: "grid",

                height: "100%",
              }}
            >
              <Stack>
                <Box className={"box"}>
                  <Typography className={"invoice-label-cash"}>
                    Observaciones
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            sx={{
              //bgcolor: "cyan",
              width: "100%",
              display: "grid",
              gridTemplateColumns: "2cm 1fr",
            }}
          >
            <Stack
              sx={{
                justifySelf: "right",
                width: "90%",
                textAlign: "right",
                display: "grid",
                gridTemplateRows: "repeat(7, 1fr)",
                alignItems: "end",
              }}
            >
              <Typography className={"invoice-label"}>SubTotal</Typography>
              <Typography className={"invoice-label"}>IVA</Typography>
              <Typography className={"invoice-label-payment"}>Total</Typography>
              <Typography className={"invoice-label"}>Abono 1</Typography>
              <Typography className={"invoice-label"}>Resta</Typography>
              <Typography
                className={"invoice-label"}
                sx={{
                  borderBottom: `1px solid ${customTheme.palette.background.dark}`,
                }}
              >
                Abono 2
              </Typography>
              <Typography className={"invoice-label"}>Resta</Typography>
            </Stack>
            <Stack
              sx={{
                textAlign: "right",
                display: "grid",
                gridTemplateRows: "repeat(7, 1fr)",
                alignItems: "end",
              }}
            >
              <Typography className={"invoice-title"}>$20.000</Typography>
              <Typography className={"invoice-title"}>$10.000</Typography>
              <Typography className={"invoice-label-payment"}>
                $30.000.000
              </Typography>
              <Typography className={"invoice-title"}>$30.000.000</Typography>
              <Typography className={"invoice-title"}>$30.000.000</Typography>
              <Box
                sx={{
                  borderBottom: `1px solid ${customTheme.palette.background.dark}`,
                }}
              ></Box>
              <Box
                sx={{
                  borderBottom: `1px solid ${customTheme.palette.background.dark}`,
                }}
              ></Box>
            </Stack>
          </Stack>
        </Stack>
        {/*  </Box> */}
      </Stack>
    </form>
  );
};

export default Factura;
