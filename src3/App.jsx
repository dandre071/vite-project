import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ProductSearchInput from "./components/ProductSearchInput";
import ProductPriceModal from "./components/ProductPriceModal";
import Text from "./components/TextField";
import GetDataForm from "./components/GetDataForm";
import { Box, createTheme, Grid, Stack, ThemeProvider } from "@mui/material";

//import { theme } from "./Styles/styles";
import Cart from "./components/Cart";
import { customTheme } from "./Hooks/useCustomTheme";
import useLocalStorage from "./Hooks/useLocalState";
import { useEffect, useState } from "react";
import ManualInput from "./components/modals/manualInput";
import ListItem from "./components/ListItem";
import Factura from "./components/pages/Factura";
import { data, error } from "..src/config/supabaseClient";

function Print() {
  console.log(data);
  return (
    <Box>
      <ThemeProvider theme={customTheme}>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: 10,
          }}
        >
          <GetDataForm />
          {/*  <ListItem /> */}
          {/* <Picker /> */}
          {/*  <h1>
          {(localData = localStorage.getItem("Manual-Products"))}
          {console.log(JSON.parse(localData))}
        </h1> */}
          {/*  <ProductList /> */}
          <Cart />
          <Factura />
        </Stack>
      </ThemeProvider>
    </Box>
  );
}
export default Print;
