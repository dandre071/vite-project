import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import useLocalStorage from "../Hooks/useLocalState";
import { useRef, useState } from "react";
import { useEffect } from "react";
import ListItem from "./ListItem";
import { useShoppingCart } from "../store/shoppingCart";
import { getTotalCart } from "./utils/helpers";
import { useGetCartTotalPrice } from "../Hooks/hooks";
import { colPesos } from "./utils/configs";
import AddBtn from "./Buttons/AddBtn";
import ModalHeader from "./ModalHeader";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
colPesos;
//import { v4 as uuidv4 } from "uuid";
const Cart = () => {
  const items = useShoppingCart((state) => state.items);

  const [list, setList] = useState(items);

  const { removeItem } = useShoppingCart();
  const totalPrice = useGetCartTotalPrice();
  console.log(totalPrice);
  return (
    <>
      <Stack spacing={1} sx={{ alignItems: "center" }}>
        <Box sx={{ position: "relative", top: 40 }}>
          <ModalHeader title={"Carrito de Compras"} />
        </Box>

        <Box
          spacing={2}
          sx={{
            width: 550,
            minHeight: 100,
            bgcolor: "secondary.light",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 3,
            p: 2,
            pt: 6,
          }}
        >
          {items.length === 0 && (
            <Stack sx={{ display: "flex", alignItems: "center" }}>
              <ShoppingBagOutlinedIcon
                sx={{ fontSize: 80, color: "secondary.dark" }}
              />
              <Typography variant="h5" sx={{ color: "secondary.dark" }}>
                Aún no has agregado productos
              </Typography>
            </Stack>
          )}

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
        {items.length !== 0 && (
          <Box borderRadius={2} sx={{ bgcolor: "primary.dark", height: 120 }}>
            <Stack
              spacing={1}
              sx={{
                alignItems: "center",
                pt: 3,
                width: 580,
                justifyContent: "space-evenly",
              }}
            >
              <Stack
                direction={"row"}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: 500,
                }}
              >
                <Typography>{`Artículos: ${items.length}`}</Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, color: "primary.light" }}
                >{`Total: ${colPesos.format(totalPrice)}`}</Typography>
              </Stack>

              <AddBtn width={300} bg={"primary.light"} color={"primary.dark"} />
            </Stack>
          </Box>
        )}
      </Stack>
    </>
  );
};

export default Cart;
