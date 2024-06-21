import { Box, Grid, ListItem } from "@mui/material";

import { useRef, useState } from "react";
import { useEffect } from "react";
import { getStorage, useLocalStorage } from "../Hooks/hooks";

const Cart = () => {
  const [initialValues, setInitialValues] = useState({
    producto: "",
    precio: "",
    cantidad: 1,
    acabado: "",
    cantAcabado: 1,
    descripcion: "",
    precioTotal: null,
  });

  const { productItems } = useLocalStorage();

  /* const { productItems } = useLocalStorage();

  console.log(productItems); 

  /*  useEffect(() => {
    localStorage.setItem("productItems", JSON.stringify(formData));
  }, [formData]); */
  /*  console.log(productItems); */
  /* useEffect(() => {
    localStorage.setItem(, JSON.stringify(productItems));
  }, [key, productItems]); */
  console.log(productItems);
  return (
    <>
      <h1>{productItems}</h1>
    </>
  );
};

export default Cart;
