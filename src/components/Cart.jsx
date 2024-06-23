import { Box, Grid, ListItem } from "@mui/material";
import useLocalStorage from "../Hooks/useLocalState";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useShoppingCart } from "../store/shoppingCart";
const Cart = () => {
  const items = useShoppingCart((state) => state.items);
  console.log(items);
  return (
    <>
      {items.map((item) => (
        <h1 key={item}>{item.name}</h1>
      ))}
    </>
  );
};

export default Cart;
