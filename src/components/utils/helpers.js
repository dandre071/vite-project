import generatePDF from "react-to-pdf";

import { useLocation } from "react-router-dom";

import { colPesos } from "./configs.js";
import { routes } from "../../main.jsx";
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
    location.pathname.includes("registro") &&
    location.pathname.match(/[0-9]/g).join("");
  if (pathText[0]) {
    return pathText[0].name;
  }
  if (location.pathname.includes("registro"))
    return `Registro ${add_zero(id, 5)}`;
};
export const getPageId = () => {
  const location = useLocation();
  const pathText = routes.filter((item) => item.path == location.pathname);

  const id = location.pathname.match(/[0-9]/g).join("");
  return id;
};
/* export function formatPhoneNumber(phoneNumberString) {
  var cleaned = ("" + phoneNumberString).replace(/\\D/g, "");
  var match = cleaned.match(/^(\\d{3})(\\d{3})(\\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
} */
export const getClassName = (reg) => {
  let textClass;
  if (reg) {
    if (reg[0].estado === "ASIGNADO") textClass = "initial-bg";
    if (reg[0].estado === "ENTREGADO") textClass = "success-bg";
    if (reg[0].estado === "DISEÑO") textClass = "design-bg";
    if (reg[0].estado === "IMPRESIÓN") textClass = "print-bg";
    if (reg[0].estado === "REVISIÓN") textClass = "print-bg";
    if (reg[0].estado === "ACABADO") textClass = "finish-bg";
    if (reg[0].estado === "LISTO") textClass = "ready-bg";
    if (reg[0].estado === "DEMORADO") textClass = "delay-bg";
    if (reg[0].estado === "CANCELADO") textClass = "cancelled-bg";
  }
  return textClass;
};
export const getClassNameTable = (data) => {
  let textClass;
  if (data) {
    if (data === "ASIGNADO") textClass = "initial-bg";
    if (data === "ENTREGADO") textClass = "success-bg";
    if (data === "DISEÑO") textClass = "design-bg";
    if (data === "IMPRESIÓN") textClass = "print-bg";
    if (data === "REVISIÓN") textClass = "print-bg";
    if (data === "ACABADO") textClass = "finish-bg";
    if (data === "LISTO") textClass = "ready-bg";
    if (data === "DEMORADO") textClass = "delay-bg";
    if (data === "CANCELADO") textClass = "cancelled-bg";
  }
  return textClass;
};
