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
import { invoiceGrid, title } from "../../Styles/styles";
import { customTheme } from "../../Hooks/useCustomTheme";
import InvoiceListItem from "../InvoiceListItem";
import { formatPhoneNumber } from "../utils/helpers";
import FormSelect2 from "../Forms/FormSelect2";
import useUsers from "../../Hooks/useUsers";
import supabase from "../../config/supabaseClient";
import Logo from "../Logo";
import InvoiceItem from "../InvoiceComps/InvoiceItem";

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
    gridTemplateColumns: "50px 80px",

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
          gridTemplateRows: "3.2cm 0.7cm 12cm 1fr",
          // gridTemplateRows: "2.3cm 2.1cm 0.7cm 12cm 3.5cm",
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
            gridTemplateColumns: "40% 1fr ",
            // bgcolor: "red",
          }}
        >
          <Stack>
            <Logo className="logo" />
          </Stack>
          <Box
            sx={{
              display: "grid",

              height: "100%",
            }}
          >
            <Stack
              sx={{
                display: "grid",

                //bgcolor: "green",

                padding: 0,
                width: "100%",

                gridTemplateRows: "40% 60%",
              }}
            >
              <Stack
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  transform: "scale(.9)",
                  justifyContent: "end",
                  alignItems: "end",

                  //border: `1.5px solid rgb(190, 190, 190)`,
                }}
              >
                <Box sx={{ justifySelf: "end" }}>
                  <Typography variant="h6" className="invoice-label">
                    Recepción:
                  </Typography>
                  <Typography
                    variant="h6"
                    className="invoice-data-date"
                    sx={{}}
                  >
                    {fullDate}
                  </Typography>
                </Box>

                <Box sx={{ justifySelf: "end" }}>
                  <Typography variant="h6" className="invoice-label" sx={{}}>
                    Entrega:
                  </Typography>
                  <Typography
                    variant="h6"
                    className="invoice-data-date"
                    sx={{}}
                  >
                    {fullDate}
                  </Typography>
                </Box>
              </Stack>
              <Stack
                direction={"column"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  bgcolor: "#f9f9f9",

                  borderRadius: 1.8,
                }}
              >
                <Box sx={{ ml: 0.5, mr: 0.5 }}>
                  <Box>
                    <Typography variant="h6" className="invoice-label" sx={{}}>
                      Cliente:
                    </Typography>
                    <Typography variant="h6" className="invoice-data" sx={{}}>
                      PINTURAS DE ARMANDO PAREDES SALAS dsdsds
                    </Typography>
                  </Box>

                  <Box sx={{ display: "grid", gridTemplateColumns: "70% 30%" }}>
                    <Box>
                      <Typography
                        className="invoice-label"
                        sx={{
                          // bgcolor: "red",
                          p: 0,

                          fontSize: 11,
                        }}
                      >
                        Email:
                      </Typography>
                      <Typography className="invoice-data">
                        sdsdsdsdsdsd
                      </Typography>
                    </Box>
                    <Box>
                      <Typography className="invoice-label">
                        Teléfono:
                      </Typography>
                      <Typography variant="h6" className="invoice-data">
                        320 659 8822
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: invoiceGrid,
            bgcolor: "black",
            position: "relative",
            top: 15,
            borderRadius: 1.4,
            width: 480,
            height: ".7cm",
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
          className="border-bottom"
          sx={{
            height: "100%",
            maxHeight: "100%",
            maxWidth: 490,
            width: "105%",
            // bgcolor: "orange",
            display: "flex",
            alignItems: "center",
            justifySelf: "center",

            //border: `1.5px solid rgb(190, 190, 190)`,
          }}
        >
          <Stack
            spacing={0.2}
            sx={{
              //  bgcolor: "red",
              width: "97%",
              height: "95%",
              mt: 2,
              display: "flex",
              alignItems: "start",
            }}
          >
            <InvoiceItem />
            <InvoiceItem />
            <InvoiceItem />
            <InvoiceItem />
            <InvoiceItem />
            <InvoiceItem />
            <InvoiceItem />
          </Stack>
        </Stack>

        <Stack
          sx={{
            width: "104%",
            height: "100%",
            // bgcolor: "blue",
            display: "grid",
            p: 0,
            pt: 1,
            mt: 1,
            gap: 0.5,
            borderRadius: 2.5,
            justifySelf: "center",
            gridTemplateColumns: "1fr 4cm",
            justifyContent: "end",
            alignItems: "start",
          }}
        >
          <Stack
            sx={{
              // bgcolor: "red",
              width: "97%",
              height: "100%",
              display: "grid",
              gridTemplateRows: ".7fr 1.1fr 1fr",
              justifySelf: "end",
              alignSelf: "center",
              borderRadius: 2,
              gap: 0.5,
            }}
          >
            <Stack
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 1,
              }}
            >
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
              <Box className="box-bottom">
                <Typography className="invoice-label">
                  Revisa Valores
                </Typography>
                <Typography></Typography>
              </Box>
              <Box className="box-bottom">
                <Typography className="invoice-label">Entrega</Typography>
                <Typography></Typography>
              </Box>
            </Stack>
            <Stack
              sx={{
                //bgcolor: "red",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                height: "95%",
                justifyContent: "center",
                alignSelf: "center",

                gap: 1,
              }}
            >
              <Stack className="box">
                <Typography className={"invoice-label-cash"}>
                  Firma y sello
                </Typography>
              </Stack>
              <Stack className="box">
                <Typography className={"invoice-label-cash"}>
                  Firma y sello
                </Typography>
              </Stack>
            </Stack>
            <Box className={"box"} sx={{ height: "1cm" }}>
              <Typography className={"invoice-label-cash"}>
                Observaciones
              </Typography>
            </Box>
          </Stack>
          <Stack
            sx={{
              //bgcolor: "#f0f4ff",
              width: "100%",

              display: "grid",
              justifyContent: "center",
              // border: `1.5px solid rgb(190, 190, 190)`,
              alignItems: "start",
              borderRadius: 2,
            }}
          >
            <Stack
              sx={{
                justifySelf: "right",
                width: "100%",
                height: "90%",
                textAlign: "right",
                display: "grid",
                gridTemplateRows: "1fr ",
                alignItems: "end",
              }}
            >
              <Box
                sx={{
                  ...box,
                  bgcolor: "primary.main",
                  width: "100%",
                  height: "100%",
                  borderRadius: 1,

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
                <Box sx={{ ...box }} className="border-bottom">
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
                  //className="border-bottom"
                  sx={{
                    ...box,
                    bgcolor: "white",
                    height: 30,
                  }}
                >
                  <Typography className={"invoice-label"}>Abono 2:</Typography>
                </Box>

                <Box
                  className="border-bottom"
                  sx={{
                    ...box,
                    bgcolor: "white",
                    height: "100%",
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
