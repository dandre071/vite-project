import { Box, Stack, Typography } from "@mui/material";

import ListItem from "../components/ListItem";
import { useShoppingCart } from "../store/shoppingCart";
import ModalHeader from "../components/ModalHeader";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { modal } from "../Styles/styles";
import { useUsersList } from "../store/lists";
import { useFormik } from "formik";
import NavBtn from "../Hooks/useCartItems";
import InvoiceItem from "../components/InvoiceComps/InvoiceItem";
import { colPesos } from "../components/utils/configs";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AnimatePresence, LayoutGroup, motion, stagger } from "framer-motion";
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
  const marginTop = items.length > 5 && 6;
  const handleChange = () => {
    items: [...state.items];
  };
  const handleClick = useShoppingCart((state) => state.updateItemQ);
  const MotionList = motion(ListItem);
  const { removeItem } = useShoppingCart();
  const invoiceGrid = "299px 38px 114px 1fr";
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: 50 }}
      >
        <Box
          className="list-item"
          sx={{
            ...modal,
            width: 600,
            minHeight: 500,
            maxHeight: 900,
            justifySelf: "center",
            display: "grid",
            mt: marginTop,
            gridTemplateRows: "100px 50px auto 50px",
          }}
        >
          <Box
            sx={{
              height: "100%",
              //bgcolor: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ModalHeader
              children={<ShoppingCartOutlinedIcon fontSize={"80"} />}
              title={"Compras"}
            />
          </Box>
          {items.length > 0 && (
            <Stack
              sx={{
                bgcolor: "black",
                display: "grid",
                justifyContent: "center",
                alignItems: "end",
                height: 40,
                color: "white",
                borderRadius: 0.8,
                gridTemplateColumns: invoiceGrid,
              }}
            >
              <Typography sx={{ fontWeight: 600, pl: 1 }}>
                Descripción
              </Typography>
              <Typography sx={{ fontWeight: 600, justifySelf: "center" }}>
                Cant
              </Typography>

              <Typography sx={{ fontWeight: 600, justifySelf: "end" }}>
                Total
              </Typography>
            </Stack>
          )}
          {items.length > 0 && (
            <Box
              style={{}}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "auto",
                justifyContent: "center",
                alignSelf: "start",
              }}
            >
              <Stack spacing={1}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "center",
                    height: "auto",
                  }}
                >
                  <Stack
                    display={"flex"}
                    spacing={1}
                    sx={{ display: "flex", alignItems: "start", flexGrow: 1 }}
                  >
                    {items.length > 0 &&
                      items.map((item) => (
                        <AnimatePresence>
                          <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                          >
                            <ListItem
                              key={item.id}
                              product={item.name}
                              q={item.quantity}
                              price={colPesos.format(item.price)}
                              totalPrice={colPesos.format(item.itemTotalPrice)}
                              finish={item.finish}
                              description={item.description}
                              finishQ={item.finishQ > 1 ? item.finishQ : ""}
                              onClick={() => {
                                removeItem(item.id);
                              }}
                            />
                          </motion.div>
                        </AnimatePresence>
                      ))}
                  </Stack>{" "}
                </Box>
              </Stack>
            </Box>
          )}
          {items.length === 0 && (
            <Box
              sx={{
                display: "grid",

                gridTemplateRows: "100px 300px 50px",
              }}
            >
              <Stack
                sx={{
                  height: 500,
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
              displayNext={items.length === 0 && "none"}
              nextText={"Pagar"}
              backText={"Agregar producto"}
              pointer={items.length === 0 ? "none" : ""}
              pathBack={"/product-module"}
              pathNext={"/payment"}
              classname={items.length > 0 ? "arrow-btn" : "disabled-btn"}
            />
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default Cart;
