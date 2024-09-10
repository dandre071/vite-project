import { Box, Stack, Typography } from "@mui/material";
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
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { TriangleAlert } from "lucide-react";
import ProductLimit from "../components/modals/ProductLImit";
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
    <div style={{}}>
      {/* {cart.length === 6 && <ProductLimit open={true} />} */}
      <Box sx={{ ...modal, height: "auto", gridTemplateRows: "30% 50% 20%" }}>
        <ModalHeader
          title={"Agregar producto"}
          children={<AddShoppingCartRoundedIcon sx={{ fontSize: iconSize }} />}
        />

        <Stack
          sx={{ display: "grid" /* pointerEvents: "none" */ }}
          // direction="column"
        >
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
              // colors={colors}
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

        {/*  <Stack
          
            sx={{
              width: "100%",
              height: "200px",
              display: "grid",
              placeItems: "center",
              // bgcolor: "background.light",
              borderRadius: 1.5,
            }}
          >
            {<ProductLimit open={true} />}
            <TriangleAlert strokeWidth={1.75} size={50} />
            <Typography variant="h4" sx={{ fontWeight: 900 }}>
              Carrito lleno!
            </Typography>
            <Typography sx={{ fontWeight: 400 }} variant="h7">
              No se pueden agregar más productos.{" "}
            </Typography>
          </Stack>

          <Navigate to="/cart" replace={true} />  */}

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
  );
};

export default ProductModule;
