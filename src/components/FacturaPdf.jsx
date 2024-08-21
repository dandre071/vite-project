import { Divider, Input, Select, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ReadOnlyText from "./Text/ReadOnlyText";
import { invoiceGrid, title } from "../Styles/styles";
import { customTheme } from "../Hooks/useCustomTheme";
import InvoiceListItem from "./InvoiceListItem";
import { formatPhoneNumber } from "./utils/helpers";
import FormSelect2 from "./Forms/FormSelect2";
import useUsers from "../Hooks/useUsers";
import supabase from "../config/supabaseClient";
import Logo from "./Logo";
import InvoiceItem from "./InvoiceComps/InvoiceItem";
/* import { jsPDF } from "jspdf";
import html2canvas from "html2canvas"; */
/* import { usePDF } from "react-to-pdf";
import generatePDF from "react-to-pdf"; */
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

const FacturaPdf = () => {
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
  const users = useUsers();
  const date = new Date();
  const fullDate = new Intl.DateTimeFormat("es-CO", {
    dateStyle: "medium",
    timeStyle: "short",
    // timeZone: "Colombia/Bogotá",
  }).format(date);
  console.log(fullDate);
  console.log(users.users);

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
    <div>
      <Document>
        <Page>
          <View>
            <View>{/*  <Logo className="logo" /> */}</View>
            <View>
              <View>
                <View>
                  <View>
                    <Text>Recepción</Text>
                    <Text>{fullDate}</Text>
                  </View>

                  <View>
                    <Text>Entrega</Text>
                    <Text>{fullDate}</Text>
                  </View>
                </View>
                <View>
                  <View>
                    <View>
                      <Text>Cliente:</Text>
                      <Text>PINTURAS DE ARMANDO PAREDES SALAS dsdsds</Text>
                    </View>

                    <View>
                      <View>
                        <Text>Email:</Text>
                        <Text>sdsdsdsdsdsd</Text>
                      </View>
                      <View>
                        <Text>Teléfono:</Text>
                        <Text>320 659 8822</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text>Concepto</Text>
            <Text>Cant</Text>
            <Text>Precio</Text>
            <Text>Total</Text>
          </View>
          <View>
            <View>
              {/* <InvoiceItem />
              <InvoiceItem /> */}
              {/* <InvoiceItem />
            <InvoiceItem />
            <InvoiceItem />
            <InvoiceItem /> */}
            </View>
          </View>

          <View>
            <View>
              <View>
                <View>
                  <View>
                    <Text>Recibe:</Text>
                    <Text>Diego</Text>
                  </View>

                  <View>
                    <Text>Realiza:</Text>
                    <Text>Diego</Text>
                  </View>
                  <View>
                    <Text>Revisa Valores</Text>
                    <Text></Text>
                  </View>
                  <View>
                    <Text>Entrega</Text>
                    <Text></Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text>Firma y sello</Text>
                  </View>
                  <View>
                    <Text>Firma y sello</Text>
                  </View>
                </View>
                <View>
                  <Text>Observaciones</Text>
                </View>
              </View>
            </View>

            <View>
              <View>
                <View>
                  <Text>Total:</Text>

                  <Text>$3.000.000</Text>
                </View>
                <View>
                  <View>
                    <Text>Abono 1:</Text>
                    <Text>$2.000.000</Text>
                  </View>
                  <View>
                    <Text>Resta:</Text>
                    <Text>$1.000.000</Text>
                  </View>
                  <View>
                    <Text>Abono 2:</Text>
                  </View>

                  <View>
                    <Text>Resta:</Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text>Efectivo</Text>
                    <View></View>
                  </View>
                  <View>
                    <View>
                      <Text>Transferencia</Text>
                      <View></View>
                    </View>
                  </View>
                </View>
              </View>
              {/*  <Text className={"invoice-label"}>EFECTIVO</Text> */}
            </View>
          </View>
          <Text>
            Carrera 16 # 102-53 - Barrio Baltazar (Turbo) / 310 417 18 14
          </Text>
        </Page>
      </Document>
      {/* <button type="button" onClick={handleDownloadPdf}>
        Download as PDF
      </button> */}
      {/* <button onClick={() => toPDF()}>Download PDF</button> */}
      {/* <button onClick={() => generatePDF(targetRef, options)}>
        Download PDF
      </button> */}
    </div>
  );
};

export default FacturaPdf;
