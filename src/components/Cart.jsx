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
import { customTheme } from "../Hooks/useCustomTheme";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { BorderBottom } from "@mui/icons-material";
import { modal } from "../Styles/styles";
import supabase from "../config/supabaseClient";
//import { v4 as uuidv4 } from "uuid";
const Cart = () => {
  const supa = supabase;
  console.log(supa);
  const items = useShoppingCart((state) => state.items);
  const clearCart = useShoppingCart((state) => state.clearCart);
  const [list, setList] = useState(items);

  const { removeItem } = useShoppingCart();
  const totalPrice = useGetCartTotalPrice();
  //console.log(totalPrice);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box sx={{ ...modal, width: 650, alignItems: "start" }}>
          <ModalHeader title={"Compras"} />
          {items.length && (
            <Stack
              sx={{
                bgcolor: "black",
                display: "grid",
                alignItems: "end",
                height: 40,
                color: "white",
                borderRadius: 1.75,
                gridTemplateColumns: "330px 100px 60px 120px 1fr",
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>Producto</Typography>
              <Typography sx={{ fontWeight: 600, justifySelf: "center" }}>
                Precio
              </Typography>
              <Typography sx={{ fontWeight: 600, justifySelf: "center" }}>
                Cant
              </Typography>
              <Typography sx={{ fontWeight: 600, justifySelf: "center" }}>
                Total
              </Typography>
            </Stack>
          )}
          <Stack
            spacing={1}
            sx={
              {
                /* alignItems: "start" */
              }
            }
          >
            <Box
              sx={{
                //border: `2px solid #f3f3f3`,

                minHeight: 200,
                //bgcolor: "#f7f7f7",
                //bgcolor: "white",
                display: "flex",
                /*  bgcolor: "primary.lighter", */
                //bgcolor: "red",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                borderRadius: 4,
                pt: 1,
                pb: 1,
              }}
            >
              {items.length === 0 && (
                <Box
                  sx={{
                    position: "relative",
                    //top: 50,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                  }}
                >
                  <Stack
                    sx={{
                      alignItems: "center",
                      alignSelf: "center",
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
              <Stack display={"flex"} spacing={1} sx={{}}>
                {items.map((item) => (
                  <ListItem
                    price={item.price}
                    key={item.id}
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
          </Stack>
          {/********** */}
          <Box sx={{ width: "100%", height: 60, bgcolor: "red" }}></Box>
        </Box>

        {items.length == 0 && (
          <Stack
            sx={{
              display: "flex",
              alignSelf: "center",
              borderRadius: 3,
              bgcolor: "white",
              alignItems: "center",
              justifySelf: "center",
              justifyContent: "center",

              width: "100%",
              height: 150,

              boxShadow: 4,
            }}
          >
            <Stack
              direction={"row"}
              sx={{
                display: "flex",
                // flexDirection: "row",
                // bgcolor: "green",
                justifyContent: "center",
                width: 480,
              }}
            >
              {/* <Badge
                    badgeContent={items.length}
                    color="secondary"
                    sx={{ justifySelf: "center", alignSelf: "center" }}
                  >
                    <ShoppingCartOutlinedIcon
                      sx={{ fontSize: 45, color: "primary.main" }}
                    />
                  </Badge> */}
              <Box
                sx={{
                  //  bgcolor: "primary.light",
                  height: 80,
                  borderRadius: 2,
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "end",
                }}
              >
                {/* <Typography>{`Artículos: ${items.length}`}</Typography> */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: "text.main",
                    fontSize: 20,
                  }}
                >{`Total:`}</Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: "text.main",
                    fontSize: 20,
                  }}
                >{`${colPesos.format(totalPrice)}`}</Typography>
              </Box>
            </Stack>

            <Stack
              spacing={1}
              direction={"row"}
              sx={{
                // borderTop: "1px solid grey",
                width: 550,
                pt: 1,
                pb: 2,

                display: "flex",
                //bgcolor: "yellow",
                // alignItems: "end",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={clearCart}
                //startIcon={<ClearOutlinedIcon />}
                sx={{ width: 30, height: 55 }}
                // variant="secondary"
                variant="secondary-outlined"
              >
                <ClearOutlinedIcon />
                {/* Cancelar */}
              </Button>
              <Button
                startIcon={<ShoppingCartOutlinedIcon />}
                sx={{ color: "white", width: 400, height: 55 }}
                variant="prime"
              >
                Finalizar
              </Button>
            </Stack>
          </Stack>
        )}
      </Box>
    </>
  );
};

export default Cart;
