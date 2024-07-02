import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import useLocalStorage from "../Hooks/useLocalState";
import { useRef, useState } from "react";
import { useEffect } from "react";
import ListItem from "./ListItem";
import { useShoppingCart } from "../store/shoppingCart";

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
      <Box
        sx={{
          bgcolor: "white",
          gap: 1,
          borderRadius: 2,
          display: "grid",
          gridTemplateRows: "50px auto auto",
          justifyContent: "start",
          alignItems: "center",
          p: 1,
          pb: 2,
          pt: 2,
          border: `2px solid #f3f3f3`,
        }}
      >
        {/********** */}
        <Box
          sx={{
            position: "relative",
            color: "primary.light",
            height: "100%",
            bgcolor: "#f7f7f7",
            // bgcolor: "primary.main",
            width: "95%",
            borderRadius: 2,
            display: "grid",
            justifySelf: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Compras
          </Typography>
        </Box>
        {/********** */}
        {/********** */}

        <Stack spacing={1} sx={{ alignItems: "center" }}>
          <Box
            sx={{
              //border: `2px solid #f3f3f3`,
              width: 550,
              minHeight: "auto",
              //bgcolor: "#f7f7f7",
              //bgcolor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
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
                  }}
                >
                  <ShoppingBagOutlinedIcon
                    sx={{ fontSize: 80, color: "secondary.main" }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: "secondary.main",
                    }}
                  >
                    Aún no se han agregado productos.
                  </Typography>
                </Stack>
              </Box>
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
            </Stack>{" "}
            {/********** */}
          </Box>
          {/* {items.length !== 0 && (
         >
          </Box>
        )} */}
        </Stack>
        {/********** */}

        <Stack
          sx={{
            display: "flex",
            borderRadius: 2,
            bgcolor: "primary.light",
            alignItems: "center",
            justifyContent: "center",
            justifySelf: "center",
            width: 525,
            height: 100,
          }}
        >
          <Stack direction={"row"} sx={{}}>
            <Typography>{`Artículos: ${items.length}`}</Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, color: "primary.dark" }}
            >{`Total: ${colPesos.format(totalPrice)}`}</Typography>
          </Stack>

          <AddBtn width={300} bg={"primary.main"} color={"primary.light"} />
        </Stack>
      </Box>
    </>
  );
};

export default Cart;
