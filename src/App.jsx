import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ProductSearchInput from "./components/ProductSearchInput";
import ProductPriceModal from "./components/ProductPriceModal";
import Text from "./components/TextField";
import GetDataForm from "./components/GetDataForm";
import {
  Autocomplete,
  Box,
  createTheme,
  Grid,
  Select,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";

//import { theme } from "./Styles/styles";
import Cart from "./components/Cart";
import { customTheme } from "./Hooks/useCustomTheme";
import useLocalStorage from "./Hooks/useLocalState";
import { useEffect, useState } from "react";
import ManualInput from "./components/modals/manualInput";
import ListItem from "./components/ListItem";
import Factura from "./components/pages/Factura";
import supabase from "./config/supabaseClient";
import { formatNumber, uppercasing } from "./components/utils/helpers";
import { options } from "./components/utils/options";
import { Form, useFormik } from "formik";
import { useProduct } from "./Hooks/hooks";
import CreateProduct from "./components/Forms/CreateProduct";
import useUsers from "./Hooks/useUsers";
import Counter from "./components/Forms/Counter";
import DownloadPdf from "./components/Buttons/DownloadPdf";

function Print() {
  const users = useUsers();
  console.log(typeof users);
  /* 
  const formik = useFormik({
    initialValues: { productName: "", info: "" },
  });
  const [info, setInfo] = useState("");
  const handleAutoChange = (event, value) => {
    formik.values.productName = value;
    setInfo(formik.values.productName);
    getProductPrice();
    console.log(formik.values.productName);
  }; */

  // console.log(supabase);
  /* const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProducts() {
      let { data, error } = await supabase.from("products").select("*");

      if (data != null) {
        setProduct(data);
      }
    }

    getProducts();
  }, []);
  const [price, setPrice] = useState(null);
  const db = product.map((x) => uppercasing(x["product_name"]));

  console.log(db);
  let productPrice;
  const getProductPrice = async () => {
    let { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("product_name", formik.values.productName);
    setPrice(data[0].product_price);
    //console.log(data[0].product_price);
    console.log(productPrice);
  }; */

  //console.log(fetchProducts());
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
          {/*} {db.map((x) => {
            console.log(uppercasing(x));
         })}*/}
          <GetDataForm />
          {/*  

          <Autocomplete
            //className={formik.errors.name ? "error" : ""}
            // helperText={formik.errors.name}
            name="productName"
            fullWidth
            //defaultValue={() => localStore[0].name || ""}
            freeSolo={true}
            autoHighlight
            id="combo-box-demo"
            options={db}
            sx={{
              textTransform: "capitalize",
            }}
            value={uppercasing(formik.values.productName)}
            //onBlur={formik.handleBlur}
            // name="name"
            onChange={handleAutoChange}
            //onChange={formik.handleChange}
            //autoCapitalize="initial"
            renderInput={(params) => (
              <TextField
                //error={() => formik.errors.name}
                // helperText={formik.touched.contact && formik.errors.contact}
                //error={formik.touched.contact && formik.errors.contact}

                fullWidth
                {...params}
                label="Productos"
                InputProps={{
                  ...params.InputProps,
                }}
              />
            )}
          />
          <Typography name={"info"}>{info}</Typography>
          <Typography>{formatNumber(price)}</Typography> */}

          {/*  <ListItem /> */}
          {/* <Picker /> */}
          {/*  <h1>
          {(localData = localStorage.getItem("Manual-Products"))}
          {console.log(JSON.parse(localData))}
        </h1> */}
          {/*  <ProductList /> */}
          {/* <Cart />
          <CreateProduct /> */}
          {/*  <Counter /> */}
          <Factura />
          <DownloadPdf />
        </Stack>
      </ThemeProvider>
    </Box>
  );
}
export default Print;
