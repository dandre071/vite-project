import { Box, Grid, Stack } from "@mui/material";
import useLocalStorage from "../Hooks/useLocalState";
import { useRef, useState } from "react";
import { useEffect } from "react";
import ListItem from "./ListItem";
import { useShoppingCart } from "../store/shoppingCart";
//import { v4 as uuidv4 } from "uuid";
const Cart = () => {
  const items = useShoppingCart((state) => state.items);
  /* const handleRemove = (id) => {
    const newList = items.filter((item) => !item.id == id);
    console.log(newList);
  };
 */
  const [list, setList] = useState(items);

  const handleRemove = () => {
    const newList = list.filter((item, index) => !item[index] === 1);
    setList(newList);
    console.log(newList);
  };

  return (
    <>
      {" "}
      <Stack display={"flex"} spacing={1}>
        {items.map((item) => (
          <ListItem
            key={item.index}
            text={item.name}
            total={item.itemTotalPrice}
            q={item.quantity}
            description={item.description}
            onClick={handleRemove}
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
