import { Box, Stack, Typography } from "@mui/material";
import AutoProductModal from "../components/AutoProductModal";
import VinylCutModal from "../components/VinylCutModal";
import ManualInput2 from "../components/modals/manualInput copy";
import { options } from "../components/utils/options";
import { modal } from "../Styles/styles";
import ModalHeader from "../components/ModalHeader";
import { useShoppingCart } from "../store/shoppingCart";
import NavBtn from "../Hooks/useCartItems";
import { iconSize } from "../Styles/styles";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import ProductLimit from "../components/modals/ProductLImit";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { vinylPrice } from "../../public/configs";
import { cutPrice } from "../components/utils/calcs";
import DbProduct from "../components/Forms/DbProduct";

const colors = {
  main: "#0303b3",
  light: "#597fff",
  dark: "#00159a",
  warning: "#ffce2d",
  success: "#41f749",
  info: "#260987",
};
cutPrice("Particular", 60, "Vinilo");
const ProductModule = () => {
  const items = useShoppingCart((state) => state.items);
  const cart = useShoppingCart();
  /*   const cartContainer = document.getElementById("cart-container");
  const cartHeight = () => {
    const height = cartContainer.offsetHeight;
    console.log(height);
  }; */

  const [height, setHeight] = useState(0);
  const handleHeight = () => setHeight(cartHeight);
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, x: 50 }}
    >
      <Box className={""} sx={{}}>
        <div
          className="form-container"
          style={{
            minWidth: 700,
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <DbProduct
              choice={options.choice}
              text={"DB"}
              acabado={options.acabados}
            />
            <AutoProductModal
              text={"Auto"}
              matSize={options.materialWidth}
              material={options.materials}
              choice={options.choice}
              options={options.acabados}
            />
            <VinylCutModal
              text={"Corte en vinilo"}
              materials={Object.keys(vinylPrice)}
              choice={options.choice}
              descolillado={options.descolillado}
              colors={{ colors }}
            />
            <ManualInput2
              choice={options.choice}
              text={"Manual input"}
              acabado={options.acabados}
            />
          </div>
          <Box
            sx={{
              display: " flex",
              justifyContent: "center",
              pb: 0,
              mt: 3,
              minWidth: 700,
            }}
          >
            <NavBtn
              nextText={"Compras"}
              backText={"Datos del cliente"}
              className={"arrow-btn"}
              pathBack={"/client-data"}
              pathNext={"/client-data/cart"}
            />
          </Box>{" "}
        </div>
      </Box>
    </motion.div>
  );
};

export default ProductModule;
