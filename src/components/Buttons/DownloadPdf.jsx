import React from "react";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import Factura from "../pages/Factura";

const DownloadPdf = () => {
  const downloadPdf = async () => {
    const fileName = "test.pdf";
    const blob = await pdf(<Factura />).toBlob();
    saveAs(blob, fileName);
  };

  return <button onClick={downloadPdf}>Download PDF</button>;
};

export default DownloadPdf;
