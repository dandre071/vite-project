import { usePersonalData, useShoppingCart } from "../../store/shoppingCart";
import { clientPrices } from "../../../public/configs";
/* const personalData = usePersonalData((state) => state.personalData);
const client = personalData.clientType; */
console.log();

export const cutPrice = (
  client,
  largo,
  material,
  descolillado,
  transportador
) => {
  let cutValue = 0;
  let materialPrice = 0;
  if (client === "Particular") {
    if (largo > 50) {
      cutValue = clientPrices["corte en vinilo (m)"];
    }
    materialPrice = Object.keys(clientPrices).filter(
      (item) => item === material
    );
  }
  console.log(cutValue, materialPrice);
};
