import {
  Box,
  Divider,
  Input,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
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
import { jsPDF } from "jspdf";

import { usePDF } from "react-to-pdf";
import generatePDF from "react-to-pdf";

const Factura = () => {
  const targetRef = useRef();
  const printRef = React.useRef();

  /*   const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");
  }; */
  /* const pdf = new jsPDF();
  const imgProperties = pdf.getImageProperties(data);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

  pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("print.pdf"); */
  /* const createPDF = () => {
    const pdf = new jsPDF("portrait", "px", [529, 793]);
    const data = document.querySelector("#pdf");
    pdf.html(data).then(() => {
      pdf.save("shipping_label.pdf");
    });
  }; */
  const clientName = "ARMANDO PAREDES SALAS";
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

  /* const targetRef = useRef(); */
  const options = {
    // default is `save`
    filename: `${clientName}.pdf`,
    method: "save",
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    //resolution: Resolution.HIGH,
    page: {
      // margin is in MM, default is Margin.NONE = 0
      //margin: Margin.SMALL,
      // default is 'A4'
      format: [140, 210],
      // default is 'portrait'
      // orientation: "portrait",
    },
    canvas: {
      // default is 'image/jpeg' for better size performance
      mimeType: "pdf",
      qualityRatio: 1,
    },
    // Customize any value passed to the jsPDF instance and html2canvas
    // function. You probably will not need this and things can break,
    // so use with caution.
    overrides: {
      // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
      pdf: {
        compress: true,
      },
      // see https://html2canvas.hertzen.com/configuration for more options
      canvas: {
        useCORS: true,
      },
    },
  };
  /* const { toPDF, targetRef } = usePDF(options); */
  return (
    <div id="pdf">
      <form ref={targetRef}>
        <Stack
          sx={{
            width: "14cm",
            height: "22cm",
            bgcolor: "white",

            display: "grid",
            gridTemplateRows: "3.2cm 0.7cm 12cm 0.8fr .5cm",
            // gridTemplateRows: "2.3cm 2.1cm 0.7cm 12cm 3.5cm",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
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
              justifyContent: "center",
              alignItems: "start",

              gridTemplateColumns: "40% 1fr ",
              // bgcolor: "red",
            }}
          >
            <Stack>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Logo className="logo" />
              </Stack>
              <Typography
                variant="h6"
                //className="invoice-data fill"
                sx={{
                  display: "flex",
                  justifySelf: "start",
                  lineHeight: 1.2,
                  justifyContent: "center",
                  fontSize: 10,
                  textAlign: "center",
                }}
              >
                310 417 18 14 <br /> Carrera 16 # 102-53 <br />
                Barrio Baltazar (Turbo)
              </Typography>
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
                  justifySelf: "end",

                  gridTemplateRows: "40% 60%",
                }}
              >
                <Stack
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",

                    //bgcolor: "green",
                    width: "85%",
                    justifyContent: "end",
                    justifySelf: "end",
                    alignItems: "end",

                    //border: `1.5px solid rgb(190, 190, 190)`,
                  }}
                >
                  <Box sx={{ justifySelf: "end", transform: "scale(.9)" }}>
                    <Typography
                      variant="h6"
                      className="invoice-label"
                      sx={{ textAlign: "right", justifySelf: "end" }}
                    >
                      Recepción
                    </Typography>
                    <Typography
                      variant="h6"
                      className="invoice-data-date"
                      sx={{}}
                    >
                      {fullDate}
                    </Typography>
                  </Box>

                  <Box sx={{ justifySelf: "end", transform: "scale(.9)" }}>
                    <Typography
                      variant="h6"
                      className="invoice-label"
                      sx={{ textAlign: "right" }}
                    >
                      Entrega
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
                    width: "95%",
                    bgcolor: "#f9f9f9",
                    justifySelf: "end",
                    borderRadius: 1.8,
                  }}
                >
                  <Box sx={{ ml: 0.5, mr: 0.5 }}>
                    <Box>
                      <Typography
                        variant="h6"
                        className="invoice-label"
                        sx={{}}
                      >
                        Cliente:
                      </Typography>
                      <Typography variant="h6" className="invoice-data" sx={{}}>
                        {clientName}
                      </Typography>
                    </Box>

                    <Box
                      sx={{ display: "grid", gridTemplateColumns: "70% 30%" }}
                    >
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
              bgcolor: "primary.main",
              position: "relative",

              width: 480,
              height: ".7cm",
              alignSelf: "center",
              alignItems: "end",
              justifyContent: "center",

              //borderBottom: `2px solid black`,
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
            <Typography className="invoice-title" sx={{ justifySelf: "right" }}>
              Total
            </Typography>
          </Stack>
          <Stack
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
              className="border-bottom-heavy "
              spacing={0.2}
              sx={{
                //  bgcolor: "red",
                width: "97%",
                height: "100%",

                display: "flex",
                alignItems: "start",
              }}
            >
              <InvoiceItem />
              <InvoiceItem />
              {/* <InvoiceItem />
            <InvoiceItem />
            <InvoiceItem />
            <InvoiceItem /> */}
            </Stack>
          </Stack>

          <Stack
            sx={{
              width: "100%",
              height: "100%",
              // bgcolor: "blue",
              display: "grid",
              p: 0,

              borderRadius: 2.5,
              justifySelf: "center",
              gridTemplateColumns: "1fr 4cm",
              justifyContent: "end",
              alignItems: "start",
            }}
          >
            <Stack
              /*  className="fill" */
              sx={{
                width: "100%",
                height: "100%",

                display: "grid",
                gridTemplateColumns: "1fr",
                placeItems: "center",
                p: 0,
                borderRadius: 1.5,
              }}
            >
              <Box
                sx={{
                  width: "95%",
                  height: "95%",
                  display: "grid",
                  gridTemplateRows: ".5fr 1.5fr 1fr",

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
                    <Typography className={"invoice-label"}>
                      Firma y sello
                    </Typography>
                  </Stack>
                  <Stack className="box">
                    <Typography className={"invoice-label"}>
                      Firma y sello
                    </Typography>
                  </Stack>
                </Stack>
                <Box className={"box"} sx={{ height: "1cm" }}>
                  <Typography className={"invoice-label"}>
                    Observaciones
                  </Typography>
                </Box>
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
                gridTemplateColumns: "1fr",
              }}
            >
              <Stack
                sx={{
                  justifySelf: "right",
                  width: "95%",
                  height: "100%",
                  textAlign: "right",
                  display: "grid",
                  gridTemplateRows: "1fr ",
                  alignItems: "end",
                  // bgcolor: "cyan",
                }}
              >
                <Box
                  sx={{
                    ...box,
                    bgcolor: "primary.main",
                    height: 30,
                    /* borderRadius: 1, */

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
                    <Typography className={"invoice-label"}>
                      Abono 1:
                    </Typography>
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
                    <Typography className={"invoice-label"}>
                      Abono 2:
                    </Typography>
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
                <Stack
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "row",
                    mt: 1,
                  }}
                >
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "start",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <Typography sx={{ fontSize: 10 }}>Efectivo</Typography>
                    <Box
                      className={"full-border"}
                      sx={{
                        width: 10,
                        height: 10,

                        borderRadius: 0.8,
                      }}
                    ></Box>
                  </Stack>
                  <Stack>
                    <Stack
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "end",
                        alignItems: "center",
                        gap: 0.5,
                        width: "100%",
                      }}
                    >
                      <Typography sx={{ fontSize: 10 }}>
                        Transferencia
                      </Typography>
                      <Box
                        className={"full-border"}
                        sx={{
                          width: 10,
                          height: 10,

                          borderRadius: 0.8,
                        }}
                      ></Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              {/*  <Typography className={"invoice-label"}>EFECTIVO</Typography> */}
            </Stack>
          </Stack>
          {/* <Typography
            variant="h6"
            //className="invoice-data fill"
            sx={{
              display: "flex",
              justifySelf: "center",
              width: "100%",
              justifyContent: "center",
              fontSize: 10,
            }}
          >
            Carrera 16 # 102-53 - Barrio Baltazar (Turbo) / 310 417 18 14
          </Typography> */}
        </Stack>
      </form>
      {/* <button type="button" onClick={handleDownloadPdf}>
        Download as PDF
      </button> */}
      {/* <button onClick={() => toPDF()}>Download PDF</button> */}
      {/* <button onClick={() => createPDF()}>Download PDF</button> */}
      <button
        data-html2canvas-ignore
        onClick={() =>
          generatePDF(targetRef, options /* { filename: "page.pdf" } */)
        }
      >
        Download PDF
      </button>
    </div>
  );
};

export default Factura;
