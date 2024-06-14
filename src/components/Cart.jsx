import { Box, Grid, ListItem } from "@mui/material";
import useLocalStorage from "../Hooks/useLocalState";
import { useRef, useState } from "react";
import { useEffect } from "react";

/* function getStorageValue() {
  const initialValue = JSON.parse(localStorage.getItem("products"));
  return initialValue || [];
} */

const Cart = () => {
  /*  const { products } = useLocalStorage(); */
  const [productList, setProductList] = useState(() => {
    let initial = JSON.parse(localStorage.getItem("products"));
    return initial;
  });
  console.log(productList);

  const getProductList = () => {
    setProductList(JSON.parse(localStorage.getItem("products")));
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(productList));
    JSON.parse(localStorage.getItem("products"));
  }, [productList]);

  /* const [products, setValue] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem("products"));
    return initialValue || [];
  }); */

  /*  const products = () => {
    JSON.parse(localStorage.getItem("products"));
  };
 */
  /* const products = JSON.parse(localStorage.getItem("products")); */

  return (
    <>
      {[...productList].map((product) => (
        <Box key={product.index}>
          <Grid container sx={{ flexGrow: 1, p: 0, m: 0 }}>
            <Grid item sm={12}>
              <ListItem>{product.producto}</ListItem>
            </Grid>
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default Cart;
