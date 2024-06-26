import { useShoppingCart } from "../../store/shoppingCart";

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

export const getTotalCart = () => {
  const cartValues = items.map((item) => item.itemTotalPrice);
  console.log(cartValues);
};
