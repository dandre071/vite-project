import { colPesos } from "./configs";

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
