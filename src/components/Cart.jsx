import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import useLocalStorage from "../Hooks/useLocalState";
import { useRef, useState } from "react";
import { useEffect } from "react";
import ListItem from "./ListItem";
import { useShoppingCart } from "../store/shoppingCart";

import { useGetCartTotalPrice } from "../Hooks/hooks";
import { colPesos } from "./utils/configs";
import AddBtn from "./Buttons/AddBtn";
import ModalHeader from "./ModalHeader";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@mui/material/Badge";

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
      <Box
        sx={{
          bgcolor: "white",
          gap: 1,
          borderRadius: 2,
          display: "grid",
          gridTemplateRows: "1fr auto auto",
          justifyContent: "start",
          alignItems: "center",
          p: 1,
          pb: 2,
          pt: 2,
          border: `2px solid #f3f3f3`,
        }}
      >
        <ModalHeader title={"Compras"} />

        <Stack spacing={1} sx={{ alignItems: "center" }}>
          <Box
            sx={{
              //border: `2px solid #f3f3f3`,
              width: 550,
              minHeight: 200,
              //bgcolor: "#f7f7f7",
              //bgcolor: "white",
              display: "flex",
              bgcolor: "background.default",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 2,
              pt: 2,
              pb: 2,
            }}
          >
            {items.length === 0 && (
              <Box
                sx={{
                  position: "relative",
                  //top: 50,
                  display: "flex",
                  flexDirection: "column",

                  alignSelf: "center",
                }}
              >
                <Stack
                  sx={{
                    alignItems: "center",
                    alignSelf: "center",
                    position: "relative",
                  }}
                >
                  <ShoppingBagOutlinedIcon
                    sx={{ fontSize: 80, color: "grey" }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: "grey",
                    }}
                  >
                    Aún no se han agregado productos.
                  </Typography>
                </Stack>
              </Box>
            )}
            <Stack display={"flex"} spacing={1} sx={{ left: 10 }}>
              {items.map((item) => (
                <ListItem
                  key={item.index}
                  text={item.name}
                  total={item.itemTotalPrice}
                  q={item.quantity}
                  description={item.description}
                  qFinish={item.qFinish}
                  finish={item.finish}
                  onClick={() => {
                    removeItem(item.id);
                  }}
                />
              ))}
            </Stack>{" "}
            {/********** */}
          </Box>
          {/* {items.length !== 0 && (
         >
          </Box>
        )} */}
        </Stack>
        {/********** */}

        {items.length && (
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              borderRadius: 2,
              // bgcolor: "primary.dark",
              bgcolor: "primary.lighter",
              alignItems: "center",
              justifyContent: "center",

              width: 525,
              height: 100,
            }}
          >
            <Stack sx={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
              <Badge
                badgeContent={items.length}
                color="secondary"
                sx={{ justifySelf: "center", alignSelf: "center" }}
              >
                <ShoppingCartOutlinedIcon
                  sx={{ fontSize: 40, color: "primary.light" }}
                />
              </Badge>
              <Box sx={{ bgcolor: "primary.light", p: 1, borderRadius: 2 }}>
                {/* <Typography>{`Artículos: ${items.length}`}</Typography> */}
                <Typography>{`Total:`}</Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, color: "text.main" }}
                >{`${colPesos.format(totalPrice)}`}</Typography>
              </Box>{" "}
              <Stack
                spacing={1}
                sx={{
                  display: "flex",
                  bgcolor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{ color: "white", width: "80%", height: 50 }}
                  variant="prime"
                >
                  Finalizar
                </Button>
                <Button
                  sx={{ color: "white", width: "80%", height: 50 }}
                  variant="secondary"
                >
                  Cancelar
                </Button>
              </Stack>
            </Stack>
          </Stack>
        )}
      </Box>
    </>
  );
};

export default Cart;
