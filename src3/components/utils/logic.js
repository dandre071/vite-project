export function sum() {
  console.log(2 + 1);
}

export const isAcabado = (initialValues) => {
  return initialValues.acabado != "Sin acabado"
    ? `Acabado: ${initialValues.acabado}`
    : "Sin acabado";
};
