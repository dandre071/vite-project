import { Box, Stack } from "@mui/material";
import AutoProductModal from "../components/AutoProductModal";
import VinylCutModal from "../components/VinylCutModal";
import ManualInput2 from "../components/modals/manualInput copy";
import { options } from "../components/utils/options";
import { modal } from "../Styles/styles";
import { Navigate } from "react-router-dom";
import ModalHeader from "../components/ModalHeader";
import { useShoppingCart } from "../store/shoppingCart";
import NavBtn from "../Hooks/useCartItems";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { iconSize } from "../Styles/styles";

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
  return (
    <div style={{ transform: "translateY(5%)" }}>
      <Box sx={{ ...modal, height: "auto", gridTemplateRows: "30% 50% 20%" }}>
        <ModalHeader
          title={"Agregar producto"}
          children={<ShoppingCartOutlined sx={{ fontSize: iconSize }} />}
        />
        {items.length < 6 ? (
          <Stack
            sx={{ display: "grid" }}
            // direction="column"
          >
            {/* <ProductPriceModal
        colors={colors}
        text={"Producto"}
        acabado={acabados}
      /> */}
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
                colors={colors}
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
                // onSubmit={handleChangeData}
                choice={options.choice}
                text={"Manual input"}
                acabado={options.acabados}
              />
            </Stack>
          </Stack>
        ) : (
          <Navigate to="/cart" replace={true} />
        )}
        <Box
          sx={{
            display: " flex",
            justifyContent: "center",
            pb: 0,
            mt: 3,
          }}
        >
          <NavBtn pathBack={"/client-data"} pathNext={"/cart"} />
        </Box>
      </Box>
    </div>
  );
};

export default ProductModule;
