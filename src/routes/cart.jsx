import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import ListItem from "../components/ListItem";
import { useShoppingCart } from "../store/shoppingCart";
import ModalHeader from "../components/ModalHeader";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { modal } from "../Styles/styles";
import { useUsersList } from "../store/lists";
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
const Cart = ({ height }) => {
  const { itemId } = useParams();

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

  const navigate = useNavigate();

  const handleClick = useShoppingCart((state) => state.updateItemQ);
  const MotionList = motion(ListItem);
  const { removeItem } = useShoppingCart();
  const invoiceGrid = "299px 38px 114px 1fr";
  /*  const cartContainer = document.getElementById("cart-container");
  const cartHeight = cartContainer.offsetHeight;
  console.log(cartHeight);
  const [height, setHeight] = useState(0);
  const handleHeight = () => setHeight(cartHeight); */
  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, x: 50 }}
      > */}
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
                    Acabado
                  </Typography>
                  <Typography sx={{ fontWeight: 400, justifySelf: "end" }}>
                    Total
                  </Typography>
                </div>
                <div
                  style={{
                    display: "grid",
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
                          delay: i * 0.3,
                          ease: "easeOut",
                        }}
                        exit={{ opacity: 0 }}
                        key={item.id}
                      >
                        <ListItem
                          style={{ width: "100%" }}
                          orientation={item.orientation}
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
                          editClick={() =>
                            navigate("/client-data/cart/:" + item.id)
                          }
                        />
                      </motion.div>
                      /*  </AnimatePresence> */
                    ))}
                </div>{" "}
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
                <Link to={"/product-module"}>
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
      {/*   <Modal
        sx={{
          display: "flex",
          justifySelf: "center",
          alignSelf: "center",

          "& .MuiModal-backdrop": {
            backgroundColor: "rgba(0, 0, 0, 0.7);",
          },
        }}
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <EditItem />
      </Modal> */}
    </>
  );
};

export default Cart;
