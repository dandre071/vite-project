import { usePersonalData, useShoppingCart } from "../../store/shoppingCart";
import { clientPrices } from "../../../public/configs";
const personalData = usePersonalData((state) => state.personalData);
const client = personalData.clientType;
console.log();

export const cutPrice = () => {
  if (client === "Particular") {
    /*  const cutValue = clientPrices. */
  }
};
