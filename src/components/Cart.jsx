import { Box, Grid, Stack } from "@mui/material";
import useLocalStorage from "../Hooks/useLocalState";
import { useRef, useState } from "react";
import { useEffect } from "react";
import ListItem from "./ListItem";
import { useShoppingCart } from "../store/shoppingCart";
import { v4 as uuidv4 } from "uuid";
const Cart = () => {
  const items = useShoppingCart((state) => state.items);
  console.log(items);
  return (
    <>
      {" "}
      <Stack display={"flex"} spacing={1}>
        {items.map((item) => (
          <ListItem
            key={}
            text={item.name}
            total={item.itemTotalPrice}
            q={item.quantity}
            description={item.description}
          />
        ))}
        {/*  {items.map((item) => (
          <h1 key={item}>{item.name}</h1>
        ))} */}
      </Stack>
    </>
  );
};

export default Cart;
