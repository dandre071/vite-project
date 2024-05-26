import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ProductSearchInput from "./components/ProductSearchInput";
import ProductPriceModal from "./components/ProductPriceModal";
import Text from "./components/TextField";
import GetDataForm from "./components/GetDataForm";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#0303b3",
      light: "#597fff",
      dark: "#00159a",
    },
    secondary: {
      main: "#ff2c2e",
    },
    background: {
      default: "#f1f1f1",
    },
    text: {
      secondary: "#646464",
      disabled: "#d6d6d6",
    },
    error: {
      main: "#ff0d00",
    },
    warning: {
      main: "#ffce2d",
    },
    success: {
      main: "#41f749",
    },
    divider: "rgba(86,86,86,0.12)",

    info: {
      main: "#260987",
      dark: "#1e0c5e",
    },
  },
});

function Print() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GetDataForm theme={{ theme }} />

        <ProductPriceModal />
        {/*<ProductSearchInput />*/}
        {/* <Auto  />*/}
      </ThemeProvider>
    </div>
  );
}
export default Print;
