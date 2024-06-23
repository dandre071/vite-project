import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ProductSearchInput from "./components/ProductSearchInput";
import ProductPriceModal from "./components/ProductPriceModal";
import Text from "./components/TextField";
import GetDataForm from "./components/GetDataForm";
import { Box, createTheme, Grid, ThemeProvider } from "@mui/material";
import ProductList from "./components/ProductList";
import Picker from "./components/Picker";
import { theme } from "./Styles/styles";
import Cart from "./components/Cart";
import useLocalStorage from "./Hooks/useLocalState";
import { useEffect, useState } from "react";
import ManualInput from "./components/modals/manualInput";
import ListItem from "./components/ListItem";

function Print() {
  /* const { products } = useLocalStorage(); */

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GetDataForm theme={{ theme }} />
        <ListItem />
        {/* <Picker /> */}
        {/*  <h1>
          {(localData = localStorage.getItem("Manual-Products"))}
          {console.log(JSON.parse(localData))}
        </h1> */}
        {/*  <ProductList /> */}
        <Cart />
      </ThemeProvider>
    </div>
  );
}
export default Print;
