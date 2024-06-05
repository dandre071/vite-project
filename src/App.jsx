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
      main: "#0073FC",
      light: "#E3EDFB",
      dark: "#0054FC",

      contrastText: "#e2f2ff",
    },
    secondary: {
      main: "#B8B8B8",
      light: "#EDEDED",
      dark: "#777777",
    },
    background: {
      default: "#f1f1f1",
    },
    text: {
      main: "#313131",
      secondary: "secondary.main",
      disabled: "secondary.light",
    },
    error: {
      main: "#F44336",
    },
    warning: {
      main: "#FF3D00",
    },
    success: {
      main: "#22C55E",
    },
    divider: "rgba(86,86,86,0.12)",

    info: {
      main: "#0090ff",
      dark: "#0081ff",
    },
  },
});
let localData;
function Print() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GetDataForm theme={{ theme }} />
        <Picker />
        <h1>
          {(localData = localStorage.getItem("Manual-Products"))}
          {console.log(JSON.parse(localData))}
        </h1>
        {/* <ProductList /> */}
      </ThemeProvider>
    </div>
  );
}
export default Print;
