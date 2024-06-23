export const totalPriceCalc = () => {};
export const isAcabado = (initialValues) => {
  return initialValues.acabado != "Sin acabado"
    ? `Acabado: ${initialValues.acabado}`
    : "Sin acabado";
};
export const productText = (product) => {
  const text = `${product.name} `;
  return text;
};
