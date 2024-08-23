import { Box, Stack } from "@mui/material";
import { customTheme } from "../Hooks/useCustomTheme";
import AutoProductModal from "../components/AutoProductModal";
import VinylCutModal from "../components/VinylCutModal";
import ManualInput2 from "../components/modals/manualInput copy";
import PersonalData from "../components/pages/PersonalData";
import { options } from "../components/utils/options";
import { modal } from "../Styles/styles";
const colors = {
  main: "#0303b3",
  light: "#597fff",
  dark: "#00159a",
  warning: "#ffce2d",
  success: "#41f749",
  info: "#260987",
};
const ProductModule = () => {
  return (
    <div>
      {" "}
      <Box>
        <Stack
          direction={"row"}
          spacing={2}
          sx={modal}

          // direction="column"
        >
          {/* <ProductPriceModal
        colors={colors}
        text={"Producto"}
        acabado={acabados}
      /> */}

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
      </Box>
    </div>
  );
};

export default ProductModule;
