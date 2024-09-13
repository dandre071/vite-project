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

const colors = {
  main: "#0303b3",
  light: "#597fff",
  dark: "#00159a",
  warning: "#ffce2d",
  success: "#41f749",
  info: "#260987",
};

const ProductModule = () => {
  const items = useShoppingCart((state) => state.items);
  const cart = useShoppingCart();
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, x: 50 }}
    >
      <div className={"form-bg"} style={{}}>
        <Box sx={{ ...modal, height: "auto", gridTemplateRows: "30% 50% 20%" }}>
          <ModalHeader
            title={"Agregar producto"}
            children={
              <AddShoppingCartRoundedIcon
                className="icon"
                sx={{ fontSize: iconSize }}
              />
            }
          />

          <Stack sx={{ display: "grid" /* pointerEvents: "none" */ }}>
            <ProductLimit open={false} />
            <Stack
              sx={{
                display: "grid",

                gap: 0.5,
              }}
            >
              <AutoProductModal
                text={"Auto"}
                matSize={options.materialWidth}
                material={options.materials}
                choice={options.choice}
                options={options.acabados}
              />

              <VinylCutModal
                text={"Corte en vinilo"}
                materials={options.vinyls}
                choice={options.choice}
                descolillado={options.descolillado}
                colors={{ colors }}
              />

              <ManualInput2
                choice={options.choice}
                text={"Manual input"}
                acabado={options.acabados}
              />
            </Stack>
          </Stack>
          <Box
            sx={{
              display: " flex",
              justifyContent: "center",
              pb: 0,
              mt: 3,
            }}
          >
            <NavBtn
              nextText={"Compras"}
              backText={"Datos del cliente"}
              className={"arrow-btn"}
              pathBack={"/client-data"}
              pathNext={"/cart"}
            />
          </Box>
        </Box>
      </div>
    </motion.div>
  );
};

export default ProductModule;
