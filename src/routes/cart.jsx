import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import ListItem from "../components/ListItem";
import { useShoppingCart } from "../store/shoppingCart";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { useFormik } from "formik";
import NavBtn from "../Hooks/useCartItems";

import { colPesos } from "../components/utils/configs";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AnimatePresence, LayoutGroup, motion, stagger } from "framer-motion";
import AddBtn from "../components/Buttons/AddBtn";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Payment from "./payment";
import zIndex from "@mui/material/styles/zIndex";
import EditItem from "../components/modals/EditItem";
import axios from "axios";
import { useEffect, useState } from "react";
/* import app from "../server"; */
/* import { app } from "../server"; */
/* import sql from "../server"; */

const Cart = ({ height }) => {
 

  const items = useShoppingCart((state) => state.items);

 
  const navigate = useNavigate();

  const { removeItem } = useShoppingCart();
 
 
  return (
    <>
    
      <Box
        className="page-layout"
        style={{
          alignItems: "center",
          justifyContent: "center",

          display: "grid",
          gridTemplateColumns: "1fr 350px",
          gridTemplateRows: "1fr",
          minHeight: "65vh",
          gap: 0,
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {items.length > 0 ? (
            <Box
              sx={{
                display: "grid",
                /*    gridTemplateRows: "30px 1fr", */
                justifyContent: "center",
              }}
            >
              <Box
                className="form-container"
                id="cart-container"
                sx={{
                  width: 700,
                  display: "grid",
                  gridTemplateRows: "5% 1fr",
                  /* minHeight: 560, */
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  minHeight: 600, //  bgcolor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                }}
              >
                <div className="cart-header">
                  <Typography sx={{ fontWeight: 400 }}>Descripción</Typography>
                  <Typography sx={{ fontWeight: 400, justifySelf: "center" }}>
                    Cant
                  </Typography>

                  <Typography sx={{ fontWeight: 400, justifySelf: "end" }}>
                    Total
                  </Typography>
                  <Typography sx={{ fontWeight: 400, justifySelf: "end" }}>
                    Acabado
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    alignItems: "start",
                    justifyContent: "start",
                  }}
                >
                  {items.length > 0 &&
                    items.map((item, i) => (
                      /*  <AnimatePresence> */
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: i === 0 ? 0.5 : i * 0.7,
                          ease: "easeOut",
                        }}
                        exit={{ opacity: 0 }}
                        key={item.id}
                      >
                        <ListItem
                          style={{ width: "100%" }}
                          orientation={item.orientation}
                          key={item.id}
                          product={item.title}
                          q={item.quantity}
                          price={colPesos.format(item.price)}
                          totalPrice={colPesos.format(item.itemTotalPrice)}
                          finish={item.finish}
                          description={item.description}
                          finishQ={item.finishQ > 1 ? item.finishQ : ""}
                          onClick={() => {
                            removeItem(item.id);
                          }}
                          editClick={() =>
                            navigate("/client-data/cart/:" + item.id)
                          }
                        />
                      </motion.div>
                  
                    ))}
                </div>
              </Box>
            </Box>
          ) : (
            <Box
              className="form-container"
              id="cart-container"
              sx={{
                display: "grid",
                flexDirection: "column",
                height: 600,
                //  bgcolor: "red",
                justifyContent: "center",

                border: "none",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  //bgcolor: "red",
                  height: "80%",
                  gap: 2,
                  alignItems: "center",
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
                <Link to={"/client-data/product-module"}>
                  <AddBtn variant="prime" width={300} />
                </Link>
              </Stack>
            </Box>
          )}
        </Box>
        <Box style={{ height: 600 }}>
          <Payment />
        </Box>
        <Box
          sx={{
            width: "100%",

            display: " flex",
            justifyContent: "center",
          }}
        >
          <NavBtn
            displayNext={"none"}
            /*  nextText={"Pagar"} */
            backText={"Agregar producto"}
            pointer={items.length === 0 ? "none" : ""}
            pathBack={"/client-data/product-module"}
            /* pathNext={"/payment"} */

            classname={items.length > 0 ? "arrow-btn" : "disabled-btn"}
          />
        </Box>
      </Box>
     
    </>
  );
};

export default Cart;
