import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ProductSearchInput from "./components/ProductSearchInput";
import ProductPriceModal from "./components/ProductPriceModal";
import Text from "./components/TextField";
import GetDataForm from "./components/GetDataForm";
import { createTheme, ThemeProvider } from "@mui/material";
import ProductList from "./components/ProductList";
import Picker from "./components/Picker";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#086bff",
      light: "#f1f6ff",
      dark: "#003fa0",

      contrastText: "#e2f2ff",
    },
    secondary: {
      main: "#B0BEC5",
      light: "#ECEFF1",
      dark: "#546E7A",
    },
    background: {
      default: "#f1f1f1",
    },
    text: {
      main: "primary",
      secondary: "secondary",
      disabled: "#d6d6d6",
    },
    error: {
      main: "#ff0d00",
    },
    warning: {
      main: "#dc3545",
    },
    success: {
      main: "#41f749",
    },
    divider: "rgba(86,86,86,0.12)",

    info: {
      main: "#0090ff",
      dark: "#0081ff",
    },
  },
});

function Print() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GetDataForm theme={{ theme }} />

        <ProductList />
      </ThemeProvider>
      <Picker />
    </div>
  );
}
export default Print;
