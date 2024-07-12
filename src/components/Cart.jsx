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

colPesos;
//import { v4 as uuidv4 } from "uuid";
const Cart = () => {
  const items = useShoppingCart((state) => state.items);
  const clearCart = useShoppingCart((state) => state.clearCart);
  const [list, setList] = useState(items);

  const { removeItem } = useShoppingCart();
  const totalPrice = useGetCartTotalPrice();
  //console.log(totalPrice);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Box
          sx={{
            bgcolor: "white",
            gap: 1,
            borderRadius: 2,
            display: "grid",
            gridTemplateRows: "1fr auto auto",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
            pb: 2,
            //pt: 2,
            border: `2px solid #f3f3f3`,
            boxShadow: 2,
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
                bgcolor: "white",
                display: "flex",
                /*  bgcolor: "primary.lighter", */
                bgcolor: "primary.light",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                borderRadius: 4,
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
              <Stack display={"flex"} spacing={1.8} sx={{}}>
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
        </Box>
        <Box>
          {items.length && (
            <Stack
              sx={{
                /*  position: "relative",
              top: 20, */
                display: "grid",
                gridTemplateColumns: "1.8fr 1.2fr",
                borderRadius: 2,

                // bgcolor: "primary.light",
                bgcolor: "white",
                alignItems: "center",
                justifyContent: "center",
                justifySelf: "center",
                width: "100%",
                height: 115,
                pt: 2,
                pb: 2,
                //boxShadow: 2,
                border: `2px solid ${customTheme.palette.primary.light}`,
              }}
            >
              <Stack sx={{}}>
                <Stack
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 2fr",
                  }}
                >
                  <Badge
                    badgeContent={items.length}
                    color="secondary"
                    sx={{ justifySelf: "center", alignSelf: "center" }}
                  >
                    <ShoppingCartOutlinedIcon
                      sx={{ fontSize: 45, color: "primary.main" }}
                    />
                  </Badge>
                  <Box sx={{ bgcolor: "primary.light", p: 1, borderRadius: 2 }}>
                    {/* <Typography>{`Artículos: ${items.length}`}</Typography> */}
                    <Typography>{`Total:`}</Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: "text.main",
                        fontSize: 30,
                      }}
                    >{`${colPesos.format(totalPrice)}`}</Typography>
                  </Box>{" "}
                </Stack>
              </Stack>

              <Stack
                spacing={1}
                sx={{
                  display: "flex",
                  //bgcolor: "white",
                  alignItems: "end",
                  justifyContent: "end",
                  pr: 1,
                }}
              >
                <Button
                  startIcon={<ShoppingCartOutlinedIcon />}
                  sx={{ color: "white", width: "70%", height: 50 }}
                  variant="prime"
                >
                  Finalizar
                </Button>
                <Button
                  onClick={clearCart}
                  startIcon={<ClearOutlinedIcon />}
                  sx={{ width: "70%", height: 50 }}
                  // variant="secondary"
                  variant="secondary-outlined"
                >
                  Cancelar
                </Button>
              </Stack>
            </Stack>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Cart;
