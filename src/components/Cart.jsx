import { Box, Grid, Stack, Typography } from "@mui/material";
import useLocalStorage from "../Hooks/useLocalState";
import { useRef, useState } from "react";
import { useEffect } from "react";
import ListItem from "./ListItem";
import { useShoppingCart } from "../store/shoppingCart";
import { getTotalCart } from "./utils/helpers";
import { useGetCartTotalPrice } from "../Hooks/hooks";
import { colPesos } from "./utils/configs";
colPesos;
//import { v4 as uuidv4 } from "uuid";
const Cart = () => {
  const items = useShoppingCart((state) => state.items);
  /* const handleRemove = (id) => {
    const newList = items.filter((item) => !item.id == id);
    console.log(newList);
  };
 */

  const [list, setList] = useState(items);

  const { removeItem } = useShoppingCart();
  const totalPrice = useGetCartTotalPrice();
  console.log(totalPrice);
  return (
    <>
      <Box borderRadius={2} sx={{ bgcolor: "green", height: 70 }}>
        <Typography>{`Artículos en el carrito: ${items.length}`}</Typography>
        <Typography variant="h5">{`Total Carrito: ${colPesos.format(
          totalPrice
        )}`}</Typography>
      </Box>
      <Box
        spacing={2}
        sx={{
          minWidth: 450,
          minHeight: 100,
          bgcolor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <Typography variant="h5">
          {items.length === 0 && "Aún no has agregado productos"}
        </Typography>
        <Stack display={"flex"} spacing={1}>
          {items.map((item) => (
            <ListItem
              key={item.index}
              text={item.name}
              total={item.itemTotalPrice}
              q={item.quantity}
              description={item.description}
              onClick={() => {
                removeItem(item.id);
              }}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Cart;
