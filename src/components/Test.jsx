import React from "react";
import { Document, Page } from "react-pdf";

import Factura from "./pages/Factura";

export default function Test() {
  return (
    <Document file={Factura}>
      <Page pageNumber={1} />
    </Document>
  );
}
