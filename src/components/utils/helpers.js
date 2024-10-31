import { useRef } from "react";
import { usePersonalData, useShoppingCart } from "../../store/shoppingCart";
import { colPesos } from "./configs";
import generatePDF from "react-to-pdf";
import { usePaymentData } from "../../store/paymentData";
import { useLocation } from "react-router-dom";
import { routes } from "../../main";
export function sum() {
  console.log(2 + 1);
}

export const isAcabado = (initialValues) => {
  return initialValues.acabado != "Sin acabado"
    ? `Acabado: ${initialValues.acabado}`
    : "Sin acabado";
};
export function formatPhoneNumber(phoneNumberString) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return match[1] + " " + match[2] + " " + match[3];
  }
  return null;
}

export const formatNumber = (num) => {
  const formmated = colPesos.format(num);
  return formmated;
};

export const uppercasing = (string) => {
  return (
    string.slice(0, 1).toUpperCase() +
    string.slice(1, string.length).toLowerCase()
  );
};

export const finishOperation = (targetRef, options) => {
  generatePDF(targetRef, { filename: "page.pdf" });
};
export function add_zero(your_number, length) {
  var num = "" + your_number;
  while (num.length < length) {
    num = "0" + num;
  }
  return num;
}
export const getPageTitle = () => {
  const location = useLocation();
  const pathText = routes.filter((item) => item.path == location.pathname);

  const id =
    location.pathname.includes("editar-registro") &&
    location.pathname.match(/[0-9]/g).join("");
  if (pathText[0]) {
    return pathText[0].name;
  }
  if (location.pathname.includes("editar-registro"))
    return `Editar Registro ${add_zero(id, 5)}`;
};
