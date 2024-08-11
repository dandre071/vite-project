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
import Logo from "../Logo";

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
  const box = {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "50px  80px",
    gap: 1,
    justifyContent: "center",
    alignItems: "center",
    //borderBottom: "1px solid black",
  };
  return (
    <form>
      <Stack
        sx={{
          width: "14cm",
          height: "21cm",
          bgcolor: "white",

          display: "grid",
          gridTemplateRows: "2.3cm 2.1cm 0.7cm 12cm 3.5cm",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          className="invoice-header"
          sx={{
            width: "100%",
            height: "100%",
            alignItems: "end",
            justifySelf: "center",
            display: "grid",
            justifyContent: "right",
            gridTemplateColumns: "45% 1fr 1fr",
          }}
        >
          <Stack>
            <Logo className="logo" />
          </Stack>

          <Stack
            sx={{
              display: "grid",
              gridTemplateRows: "1fr 1fr",
              transform: "scale(.9)",
            }}
          >
            <Box>
              <Typography variant="h6" className="invoice-label" sx={{}}>
                Fecha Entrega
              </Typography>
              <Typography variant="h6" className="invoice-data-date" sx={{}}>
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/*  <Box
              sx={{
                // bgcolor: "primary.main",
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontSize: 14, fontWeight: 400, color: "text.main" }}
              >
                RECIBO
              </Typography>
            </Box> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
              }}
            >
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "primary.main",
                }}
              >
                R00023
              </Typography>
            </Box>
          </Box>
        </Stack>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            justifyContent: "center",
            justifySelf: "center",
            bgcolor: "#f9f9f9",
            width: "100%",
            height: "100%",
            borderRadius: 1.8,
          }}
        >
          <Stack
            sx={{
              display: "grid",

              //bgcolor: "green",
              justifyContent: "center",
              width: "95%",
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
            display: "grid",
            gridTemplateColumns: "6cm 1cm 2.5cm 2.5cm",
            bgcolor: "#f0f0f0",
            position: "relative",
            top: 10,
            borderRadius: 2,
            width: "102%",
            height: ".6cm",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",

            //border: `2px solid black`,
          }}
        >
          <Typography className="invoice-title">Concepto</Typography>
          <Typography className="invoice-title" sx={{ justifySelf: "center" }}>
            Cant
          </Typography>
          <Typography className="invoice-title" sx={{ justifySelf: "right" }}>
            Precio
          </Typography>
          <Typography className="invoice-title" sx={{ justifySelf: "right" }}>
            Total
          </Typography>
        </Stack>
        <Stack
          sx={{
            height: "100%",
            width: "105%",
            //bgcolor: "orange",
            display: "flex",
            alignItems: "center",
            justifySelf: "center",
            borderRadius: 3,

            border: `1.5px solid rgb(190, 190, 190)`,
          }}
        ></Stack>
        <Stack
          sx={{
            width: "104%",
            height: "100%",
            // bgcolor: "blue",
            display: "grid",
            p: 0,
            pt: 0,
            mt: 1,
            gap: 1,
            borderRadius: 2.5,
            justifySelf: "center",
            gridTemplateColumns: "1fr 4cm",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <Stack
            sx={{
              //bgcolor: "red",
              width: "100%",
              height: "95%",
              display: "grid",
              gridTemplateRows: "2fr 1fr",
              justifySelf: "center",
              alignSelf: "center",
              borderRadius: 2,
            }}
          >
            <Stack
              sx={{
                //bgcolor: "red",
                display: "grid",
                gridTemplateColumns: "1fr 2.5fr",
                height: "100%",
                justifyContent: "center",
                alignSelf: "center",
                gap: 0.7,
              }}
            >
              <Stack
                sx={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 0.5 }}
              >
                <Box className="box">
                  <Typography className={"invoice-label-cash"}>
                    Revisa Valores
                  </Typography>
                </Box>
                <Box className="box">
                  <Typography className={"invoice-label-cash"}>
                    Entrega
                  </Typography>
                </Box>
              </Stack>

              <Stack className="box">
                <Typography className={"invoice-label-cash"}>
                  Entrega
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                //  bgcolor: "green",
                display: "grid",
                pt: 0.5,
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
              //bgcolor: "#f0f4ff",
              width: "100%",
              mt: 0.4,
              display: "grid",
              justifyContent: "center",
              border: `1.5px solid rgb(190, 190, 190)`,
              alignItems: "start",
              borderRadius: 2,
            }}
          >
            <Stack
              sx={{
                pt: 0.6,
                justifySelf: "right",
                width: "100%",
                height: "90%",
                textAlign: "right",
                display: "grid",
                gridTemplateRows: "1fr 3fr",
                alignItems: "end",
              }}
            >
              <Box
                sx={{
                  ...box,
                  bgcolor: "primary.main",
                  width: "102%",
                  height: "100%",
                  borderRadius: 1.5,

                  color: "white",
                }}
              >
                <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
                  Total:
                </Typography>

                <Typography sx={{ fontSize: 14, fontWeight: 600, pr: 0.5 }}>
                  $3.000.000
                </Typography>
              </Box>
              <Stack>
                <Box sx={box}>
                  <Typography className={"invoice-label"}>Abono 1:</Typography>
                  <Typography
                    className={"invoice-label-payment"}
                    sx={{ pr: 0.5 }}
                  >
                    $2.000.000
                  </Typography>
                </Box>
                <Box sx={{ ...box }}>
                  <Typography className={"invoice-label"}>Resta:</Typography>
                  <Typography
                    className={"invoice-label-payment"}
                    sx={{
                      textAlign: "right",
                      alignSelf: "center",
                      pr: 0.5,
                    }}
                  >
                    $1.000.000
                  </Typography>
                </Box>
                <Box
                  sx={{
                    ...box,
                    bgcolor: "white",
                    height: "100%",
                    borderRadius: 1.5,
                  }}
                >
                  <Typography className={"invoice-label"}>Abono 2:</Typography>
                </Box>
                <Box sx={{ height: 12 }}></Box>
                <Box
                  sx={{
                    ...box,
                    bgcolor: "white",
                    height: "100%",
                    borderRadius: 1.5,
                  }}
                >
                  <Typography className={"invoice-label"}>Resta:</Typography>
                </Box>
              </Stack>
            </Stack>
            {/*  <Typography className={"invoice-label"}>EFECTIVO</Typography> */}
          </Stack>
        </Stack>
        {/*  </Box> */}
        {/*   <Box sx={{ width: "100%", height: 20, bgcolor: "primary.main" }}></Box> */}
      </Stack>
    </form>
  );
};

export default Factura;
