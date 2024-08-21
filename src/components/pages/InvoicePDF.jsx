import { Divider, Input, Select, TextField, Typography } from "@mui/material";
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

/* import { usePDF } from "react-to-pdf";
import generatePDF from "react-to-pdf"; */

import generatePDF from "react-to-pdf";

const InvoicePDF = () => {
  const targetRef = useRef();
  /* const printRef = React.useRef();
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };
 */
  const createPDF = () => {
    const pdf = new jsPDF("portrait", "px", [529, 793], {
      putOnlyUsedFonts: true,
    });
    const data = document.querySelector("#pdf");
    pdf.html(data).then(() => {
      pdf.save("shipping_label.pdf");
    });
  };
  const users = useUsers();
  const date = new Date();
  const fullDate = new Intl.DateTimeFormat("es-CO", {
    dateStyle: "medium",
    timeStyle: "short",
    // timeZone: "Colombia/Bogotá",
  }).format(date);
  console.log(fullDate);
  console.log(users.users);
  const div = {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "50px 80px",

    justifyContent: "center",
    alignItems: "center",
    //borderBottom: "1px solid black",
  };

  /* const targetRef = useRef(); */
  /* const options = {
    // default is `save`
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
      format: [529, 793],
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
        compress: false,
      },
      // see https://html2canvas.hertzen.com/configuration for more options
      canvas: {
        useCORS: true,
      },
    },
  }; */
  /* const { toPDF, targetRef } = usePDF(options); */
  return (
    <div id="pdf">
      <form>
        <div
          style={{
            width: "14cm",
            height: "21cm",
            bgcolor: "white",

            display: "grid",
            gridTemplateRows: "3.2cm 0.7cm 12cm 0.8fr .5cm",
            // gridTemplateRows: "2.3cm 2.1cm 0.7cm 12cm 3.5cm",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.6,
          }}
        >
          <div
            className="invoice-header"
            style={{
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
            <div>
              <Logo className="logo" />
            </div>
            <div
              style={{
                display: "grid",

                height: "100%",
              }}
            >
              <div
                style={{
                  display: "grid",

                  //bgcolor: "green",

                  padding: 0,
                  width: "100%",

                  gridTemplateRows: "40% 60%",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    /* transform: "scale(.9)", */
                    justifyContent: "end",
                    alignItems: "end",

                    //border: `1.5px solid rgb(190, 190, 190)`,
                  }}
                >
                  <div style={{ justifySelf: "end" }}>
                    <p
                      variant="h6"
                      className="invoice-label"
                      style={{ textAlign: "right" }}
                    >
                      Recepción
                    </p>
                    <Typography
                      variant="h6"
                      className="invoice-data-date"
                      style={{}}
                    >
                      {fullDate}
                    </Typography>
                  </div>

                  <div style={{ justifySelf: "end" }}>
                    <Typography
                      variant="h6"
                      className="invoice-label"
                      style={{ textAlign: "right" }}
                    >
                      Entrega
                    </Typography>
                    <Typography
                      variant="h6"
                      className="invoice-data-date"
                      style={{}}
                    >
                      {fullDate}
                    </Typography>
                  </div>
                </div>
                <div
                  direction={"column"}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    bgcolor: "#f9f9f9",

                    borderRadius: 1.8,
                  }}
                >
                  <div style={{ ml: 0.5, mr: 0.5 }}>
                    <div>
                      <Typography
                        variant="h6"
                        className="invoice-label"
                        style={{}}
                      >
                        Cliente:
                      </Typography>
                      <Typography
                        variant="h6"
                        className="invoice-data"
                        style={{}}
                      >
                        PINTURAS DE ARMANDO PAREDES SALAS dsdsds
                      </Typography>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "70% 30%",
                      }}
                    >
                      <div>
                        <Typography
                          className="invoice-label"
                          style={{
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
                      </div>
                      <div>
                        <Typography className="invoice-label">
                          Teléfono:
                        </Typography>
                        <Typography variant="h6" className="invoice-data">
                          320 659 8822
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: invoiceGrid,
              bgcolor: "black",
              position: "relative",

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
            <Typography
              className="invoice-title"
              style={{ justifySelf: "center" }}
            >
              Cant
            </Typography>
            <Typography
              className="invoice-title"
              style={{ justifySelf: "right" }}
            >
              Precio
            </Typography>
            <Typography
              className="invoice-title"
              style={{ justifySelf: "right" }}
            >
              Total
            </Typography>
          </div>
          <div
            style={{
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
            <div
              spacing={0.2}
              style={{
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
            </div>
          </div>

          <div
            style={{
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
            <div
              className="fill"
              style={{
                width: "100%",
                height: "100%",

                display: "grid",
                gridTemplateColumns: "1fr",
                placeItems: "center",
                p: 0,
                borderRadius: 1.5,
              }}
            >
              <div
                style={{
                  width: "95%",
                  height: "95%",
                  display: "grid",
                  gridTemplateRows: ".5fr 1.5fr 1fr",

                  borderRadius: 2,

                  gap: 0.5,
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 1,
                  }}
                >
                  <div>
                    <Typography variant="h6" className="invoice-label">
                      Recibe:
                    </Typography>
                    <Typography className="invoice-data">Diego</Typography>
                  </div>

                  <div>
                    <Typography variant="h6" className="invoice-label">
                      Realiza:
                    </Typography>
                    <Typography className="invoice-data">Diego</Typography>
                  </div>
                  <div className="div-bottom">
                    <Typography className="invoice-label">
                      Revisa Valores
                    </Typography>
                    <Typography></Typography>
                  </div>
                  <div className="div-bottom">
                    <Typography className="invoice-label">Entrega</Typography>
                    <Typography></Typography>
                  </div>
                </div>
                <div
                  style={{
                    //bgcolor: "red",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    height: "95%",
                    justifyContent: "center",
                    alignSelf: "center",

                    gap: 1,
                  }}
                >
                  <div className="div">
                    <Typography className={"invoice-label"}>
                      Firma y sello
                    </Typography>
                  </div>
                  <div className="div">
                    <Typography className={"invoice-label"}>
                      Firma y sello
                    </Typography>
                  </div>
                </div>
                <div className={"div"} style={{ height: "1cm" }}>
                  <Typography className={"invoice-label"}>
                    Observaciones
                  </Typography>
                </div>
              </div>
            </div>

            <div
              style={{
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
              <div
                style={{
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
                <div
                  style={{
                    ...div,
                    bgcolor: "primary.main",
                    height: "100%",
                    borderRadius: 1,

                    color: "white",
                  }}
                >
                  <Typography style={{ fontSize: 13, fontWeight: 600 }}>
                    Total:
                  </Typography>

                  <Typography
                    style={{ fontSize: 14, fontWeight: 600, pr: 0.5 }}
                  >
                    $3.000.000
                  </Typography>
                </div>
                <div>
                  <div style={div}>
                    <Typography className={"invoice-label"}>
                      Abono 1:
                    </Typography>
                    <Typography
                      className={"invoice-label-payment"}
                      style={{ pr: 0.5 }}
                    >
                      $2.000.000
                    </Typography>
                  </div>
                  <div style={{ ...div }} className="border-bottom">
                    <Typography className={"invoice-label"}>Resta:</Typography>
                    <Typography
                      className={"invoice-label-payment"}
                      style={{
                        textAlign: "right",
                        alignSelf: "center",
                        pr: 0.5,
                      }}
                    >
                      $1.000.000
                    </Typography>
                  </div>
                  <div
                    //className="border-bottom"
                    style={{
                      ...div,
                      bgcolor: "white",
                      height: 30,
                    }}
                  >
                    <Typography className={"invoice-label"}>
                      Abono 2:
                    </Typography>
                  </div>

                  <div
                    className="border-bottom"
                    style={{
                      ...div,
                      bgcolor: "white",
                      height: "100%",
                    }}
                  >
                    <Typography className={"invoice-label"}>Resta:</Typography>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "row",
                    mt: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "start",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <Typography style={{ fontSize: 10 }}>Efectivo</Typography>
                    <div
                      className={"full-border"}
                      style={{
                        width: 10,
                        height: 10,

                        borderRadius: 0.8,
                      }}
                    ></div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "end",
                        alignItems: "center",
                        gap: 0.5,
                        width: "100%",
                      }}
                    >
                      <Typography style={{ fontSize: 10 }}>
                        Transferencia
                      </Typography>
                      <div
                        className={"full-border"}
                        style={{
                          width: 10,
                          height: 10,

                          borderRadius: 0.8,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  <Typography className={"invoice-label"}>EFECTIVO</Typography> */}
            </div>
          </div>
          <Typography
            variant="h6"
            //className="invoice-data fill"
            style={{
              display: "flex",
              justifySelf: "center",
              width: "100%",
              justifyContent: "center",
              fontSize: 10,
            }}
          >
            Carrera 16 # 102-53 - Barrio Baltazar (Turbo) / 310 417 18 14
          </Typography>
        </div>
      </form>
      {/* <button type="button" onClick={handleDownloadPdf}>
        Download as PDF
      </button> */}
      {/* <button onClick={() => toPDF()}>Download PDF</button> */}
      <button onClick={() => createPDF()}>Download PDF</button>
      {/* <button onClick={() => generatePDF(targetRef, options)}>
        Download PDF
      </button> */}
    </div>
  );
};

export default InvoicePDF;
