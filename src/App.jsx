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
      main: "#0078ff",
      light: "#00acff",
      dark: "#0064ff",

      contrastText: "#e2f2ff",
    },
    secondary: {
      main: "#595C5F",
      light: "#ed4b82",
      dark: "#a31545",
    },
    background: {
      default: "#f1f1f1",
    },
    text: {
      main: "primary",
      secondary: "#595C5F",
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
