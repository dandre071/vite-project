import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Input, TextField, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ModalHeader from "../ModalHeader";
import AddBtn from "../AddBtn";
import OpenModalBtn from "../OpenModalBtn";
import { useState } from "react";
import { acabados } from "../lists";
import { FormInputText } from "../FormInputText.jsx";
import FormSelect2 from "../Forms/FormSelect2.jsx";
import {
  styleConf,
  themeColors,
  inputPropsConf,
  textStyles,
} from "../utils/configs.js";
import { useProduct } from "../../Hooks/hooks.js";
import { useShoppingCart } from "../../store/shoppingCart.js";
import CalcBtn from "../Buttons/CalcBtn.jsx";

const module = "ManualInput";
const ManualInput2 = ({ text }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    return setOpen(false);
  };
  const styleParams = { radius: 20, padd: 6 };
  //use Zustand store
  const items = useShoppingCart((state) => state.items);
  const addItem = useShoppingCart((state) => state.addItem);
  //use product hook
  const { products, handleInputChange, handlerAdd, totalCalc } =
    useProduct(addItem);

  /* const totalCalc = () => {
    setProducts({
      ...products,
      [products.itemTotalPrice]: products.quantity * products.price,
    });
  }; */
  console.log(items);
  return (
    <Box style={{ bg: "red", BorderColor: "black" }}>
      <OpenModalBtn text={text} onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box borderRadius="10px" sx={styleConf}>
          <Box
            borderRadius="10px"
            sx={{
              pt: 0,
              pr: 6,
              pl: 6,
              pb: 3,
              borderTopRightRadius: styleParams.radius,
              borderTopLeftRadius: styleParams.radius,
              bgcolor: "white",
            }}
          >
            <ModalHeader title={"Configuración Manual"} style={{ pb: 20 }} />
            <form onSubmit={handlerAdd} noValidate onChange={handleInputChange}>
              <Grid container spacing={1.5} sx={{ flexGrow: 1, p: 0, m: 0 }}>
                <Grid item sm={12}></Grid>

                <Grid item sm={12} xs={12}>
                  <TextField
                    name="name"
                    value={products.name}
                    fullWidth
                    label={"Producto"}
                    type="text"
                    InputProps={{
                      style: { ...inputPropsConf },
                    }}
                    sx={{ ...textStyles }}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item sm={8} xs={8}>
                  <TextField
                    name="price"
                    fullWidth
                    label={"Precio"}
                    type="number"
                    value={products.price}
                    InputProps={{
                      style: inputPropsConf,
                    }}
                    sx={textStyles}
                  />
                </Grid>

                <Grid item sm={4} xs={4}>
                  <TextField
                    value={products.quantity}
                    name="quantity"
                    fullWidth
                    label={"Cantidad"}
                    type="number"
                    InputProps={{
                      style: inputPropsConf,
                    }}
                    sx={textStyles}
                  />
                </Grid>

                <Grid item sm={12} xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1.2,
                      justifyContent: "center",
                      alignItems: "center",
                      m: 0,
                    }}
                  >
                    <FormSelect2
                      fullWidth
                      name="finish"
                      options={acabados}
                      label={"Acabado"}
                      theme={themeColors}
                      style={{ textStyles }}
                      sx={{ borderRadius: 20 }}
                      defaultValue={"Sin acabado"}
                      onChange={handleInputChange}
                    />

                    {(products.finish == "Ojales" ||
                      products.finish == "Bolsillos") && (
                      <TextField
                        sx={{
                          ...inputPropsConf,
                          color: themeColors.darkText,
                          width: "49%",
                          borderRadius: 2,
                        }}
                        fullWidth
                        type={"number"}
                        label={"Cantidad"}
                        defaultValue={1}
                        variant={"outlined"}
                        value={products.finishQ}
                        name="finishQ"
                        InputProps={{
                          style: inputPropsConf,
                        }}
                      />
                    )}
                  </Box>
                </Grid>
                <Grid
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "5fr 2fr 5fr",
                  }}
                  item
                  sm={12}
                  xs={12}
                >
                  <Box>
                    <CalcBtn onClick={totalCalc} />
                  </Box>

                  <Typography
                    sx={{
                      // width: "40%",
                      alignContent: "center",
                      justifyContent: "end",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    Total producto
                  </Typography>
                  <Typography
                    name={"itemTotalPrice"}
                    // value={products.itemTotalPrice}
                    onChange={totalCalc}
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "text.dark",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {`$ ${products.itemTotalPrice}`}
                    {/* {Total producto: `$ ${products.quantity * products.price}`} */}
                  </Typography>
                </Grid>
                <Grid item sm={12} xs={12}>
                  <FormInputText
                    disabled={false}
                    name={"description"}
                    variant={"outlined"}
                    defaultValue={""}
                    label={"Descripción del trabajo"}
                    type="text"
                    required={false}
                    multiline={true}
                    autofocus={false}
                    value={products.description}
                    rows={5}
                  />
                </Grid>

                <Grid
                  item
                  sm={12}
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center", pt: 2 }}
                >
                  <AddBtn />
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ManualInput2;
