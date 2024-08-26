import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import useLocalStorage from "../Hooks/useLocalState";
import { useRef, useState } from "react";
import { useEffect } from "react";
import ListItem from "../components/ListItem";
import { useShoppingCart } from "../store/shoppingCart";

import { useGetCartTotalPrice } from "../Hooks/hooks";
import { colPesos } from "../components/utils/configs";
import AddBtn from "../components/Buttons/AddBtn";
import ModalHeader from "../components/ModalHeader";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@mui/material/Badge";
import { customTheme } from "../Hooks/useCustomTheme";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { BorderBottom } from "@mui/icons-material";
import { modal } from "../Styles/styles";
import supabase from "../config/supabaseClient";
import useProducts from "../Hooks/useProducts";
import { useUsersList } from "../store/lists";
import { useFormik } from "formik";
import Counter from "../components/Forms/Counter";
import { Link } from "react-router-dom";
//import { v4 as uuidv4 } from "uuid";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import NextBtn from "../components/Buttons/NextBtn";
import NavBtn from "../Hooks/useCartItems";
const Cart = () => {
  const [btnState, setBtnState] = useState();

  const usersList = useUsersList((state) => state.usersList);
  /* const usersList = useUsersList((state) => state.users[0]).map(
    (user) => user.users
  ); */
  console.log(usersList);
  //const usersList = users.map((x) => x["users"]);
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
  /*   const updateItemQ = useShoppingCart((state) => state.updateItemQ); */

  /* console.log(
    items.filter((x) => x.id === "23d12472-11c4-4c35-861d-1a30867af570")
  ); */
  const handleChange = () => {
    items: [...state.items, (state.items.price = 1222)];
  };
  const handleClick = useShoppingCart((state) => state.updateItemQ);
  /* const totalCalc = () => {
    formik.setValues({
      ...formik.values,
      itemTotalPrice: formik.values.quantity * formik.values.price,
    });
  }; */

  const { removeItem } = useShoppingCart();

  //console.log(totalPrice);
  const [quantity, setQuantity] = useState(0);

  //const db = useProducts();
  // console.log(db);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignSelf: "start",
        }}
      >
        <Box
          sx={{
            ...modal,
            width: 650,
            alignItems: "start",
            transform: "scale(0.9)",
          }}
        >
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
              {/********** */}
            </Box>
          </Stack>
          {/********** */}
          <Box
            sx={{
              width: "100%",
              height: 60,
              display: " flex",
              justifyContent: "center",
            }}
          >
            {/* <Grid
              item
              sx={{
                height: 70,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link to={"/product-module"}>
                <Button
                  variant="primary"
                  sx={{ height: "80%" }}
                  //onClick={handleSubmit}
                  startIcon={<NavigateBeforeIcon />}
                >
                  Producto
                </Button>
              </Link>
              {items.length > 0 ? (
                <Link to={"/payment"}>
                  <NextBtn
                    className={items.length > 0 ? "arrow-btn" : "disabled-btn"}
                  />
                </Link>
              ) : (
                <NextBtn className={"disabled-btn"} />
              )}
            </Grid> */}
            <NavBtn
              pathBack={"/product-module"}
              pathNext={"/payment"}
              style={{ display: "flex", justifySelf: "center" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
