import { Box, Button, Grid, Stack } from "@mui/material";
import { customTheme } from "../Hooks/useCustomTheme";
import AutoProductModal from "../components/AutoProductModal";
import VinylCutModal from "../components/VinylCutModal";
import ManualInput2 from "../components/modals/manualInput copy";
import PersonalData from "../components/pages/PersonalData";
import { options } from "../components/utils/options";
import { modal } from "../Styles/styles";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

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
      <Box sx={{ ...modal, height: 450 }}>
        <Stack
          spacing={2}
          sx={{ display: "grid", gridTemplateRows: "400px 1fr" }}
          // direction="column"
        >
          {/* <ProductPriceModal
        colors={colors}
        text={"Producto"}
        acabado={acabados}
      /> */}
          <Stack sx={{ display: "flex", flexDirection: "column" }}>
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
        <Grid
          item
          sx={{
            height: 70,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to={"/client-data"}>
            <Button
              variant="primary"
              sx={{ height: "80%" }}
              //onClick={handleSubmit}
              startIcon={<NavigateBeforeIcon />}
            >
              Cliente
            </Button>
          </Link>
          <Link to={"/cart"}>
            <Button
              variant="primary"
              sx={{ height: "80%" }}
              //onClick={handleSubmit}
              endIcon={<NavigateNextIcon />}
            >
              Compras
            </Button>
          </Link>
        </Grid>
      </Box>
    </div>
  );
};

export default ProductModule;
