import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import useLocalStorage from "../Hooks/useLocalState";
import { useRef, useState } from "react";
import { useEffect } from "react";
import ListItem from "../components/ListItem";
import { useShoppingCart } from "../store/shoppingCart";
import ModalHeader from "../components/ModalHeader";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { modal } from "../Styles/styles";
import { useUsersList } from "../store/lists";
import { useFormik } from "formik";
import NavBtn from "../Hooks/useCartItems";
const Cart = () => {
  const usersList = useUsersList((state) => state.usersList);

  const formik = useFormik({
    initialValues: {
      id: "",
      module: "ManualInput",
      name: "",
      price: null,
      quantity: 1,
      description: "",
      height: 0,
      width: 0,
      matWidth: 0,
      finish: [],
      finishQ: 1,
      material: "",
      descolillado: "",
      transfer: false,
      itemTotalPrice: 0,
    },
    //validationSchema: productSchema,

    //onSubmit: handlerAdd,
  });
  const items = useShoppingCart((state) => state.items);

  const handleChange = () => {
    items: [...state.items];
  };
  const handleClick = useShoppingCart((state) => state.updateItemQ);

  const { removeItem } = useShoppingCart();

  return (
    <>
      <Box
        sx={{
          gap: 1,
          alignSelf: "start",
          display: "flex",

          height: "auto",
          justifySelf: "center",
        }}
      >
        <Box
          sx={{
            ...modal,
            width: 650,
            justifySelf: "center",
            display: "grid",

            alignItems: "start",
            /*  transform: "scale(0.9)", */
          }}
        >
          <Box sx={{}}>
            <ModalHeader title={"Compras"} />
          </Box>

          {items.length > 0 && (
            <Box sx={{ display: "flex", flexDirection: "column" }}>
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
              <Stack spacing={1}>
                <Box
                  sx={{
                    display: "flex",

                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "center",
                    height: "auto",
                    pt: 1,
                    pb: 1,
                  }}
                >
                  <Stack
                    display={"flex"}
                    spacing={1}
                    sx={{ display: "flex", alignItems: "start" }}
                  >
                    {items.map((item) => (
                      <ListItem
                        price={item.price}
                        key={item.id}
                        text={item.name}
                        total={item.itemTotalPrice}
                        q={item.quantity}
                        handleChange={handleChange}
                        description={item.description}
                        qFinish={item.qFinish}
                        finish={item.finish}
                        onClick={() => {
                          removeItem(item.id);
                        }}
                      />
                    ))}
                  </Stack>{" "}
                </Box>
              </Stack>
            </Box>
          )}
          {items.length === 0 && (
            <Box
              sx={{
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
                <ShoppingBagOutlinedIcon sx={{ fontSize: 80, color: "grey" }} />
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

          <Box
            sx={{
              width: "100%",
              height: 60,
              display: " flex",
              justifyContent: "center",
            }}
          >
            <NavBtn
              pointer={items.length === 0 ? "none" : ""}
              pathBack={"/product-module"}
              pathNext={"/payment"}
              classname={items.length > 0 ? "arrow-btn" : "disabled-btn"}
              style={{ display: "flex", justifySelf: "center" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
