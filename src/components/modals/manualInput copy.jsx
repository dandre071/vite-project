import * as React from "react";
import Box from "@mui/material/Box";

import { ListItem, TextField } from "@mui/material";
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
/* import {
  useHandleInputChange,
  useLocalStorage,
} from "../Hooks/custom-Hooks.js"; */
import { useEffect } from "react";
import { useLocalStorage } from "../../Hooks/hooks.js";
import { useShoppingCart } from "../../store/shoppingCart.js";

const ManualInput2 = ({ text }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    return setOpen(false);
  };

  /*  const [product, setProduct] = useState("");
  const handleChange = (e) => {
    setInitialValues(() => ({
      ...initialValues,
      [e.target.name]: e.target.value,
    }));
  }; */

  const styleParams = { radius: 20, padd: 6 };

  const items = useShoppingCart((state) => state.items);
  const item = [];
  //using zustand implementation
  const [products, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    quantity: null,
    description: "",
    height: null,
    width: null,
    matWidth: null,
    finish: "",
    material: "",
    descolillado: "",
    transfer: false,
  });
  const handleInputChange = (e) => {
    setProduct({ ...products, [e.target.name]: e.target.value });
    console.log(products);
  };
  const addItem = useShoppingCart((state) => state.addItem);

  const handlerAdd = (e) => {
    e.preventDefault();
    addItem(products);
  };
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
            <form
              /* onSubmit={handleSubmit(onSubmit)}  onSubmit={submitForm}*/
              /* onClick={handlerAdd} */
              onSubmit={handlerAdd}
              noValidate
              onChange={handleInputChange}
            >
              <Grid container spacing={1.5} sx={{ flexGrow: 1, p: 0, m: 0 }}>
                <Grid item sm={12}></Grid>

                <Grid item sm={12} xs={12}>
                  <TextField
                    //onChange={handleChange}
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
                    //onChange={handleChange}
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
                    /*  defaultValue={1} */
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
                      /*  value={formData.acabado} */
                      theme={themeColors}
                      style={{ textStyles }}
                      sx={{ borderRadius: 20 }}
                      defaultValue={"Sin acabado"}
                      onChange={handleInputChange}
                    />
                    {/* renders 'cantidad acabado' if 'acabado' equals to 'ojales | bolsillos */}
                    {/*{(formValues.acabado == "Ojales" ||
                      formValues.acabado == "Bolsillos") && (
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
                        value={formValues.cantAcabado} 
                        name="cantAcabado"
                        InputProps={{
                          style: inputPropsConf,
                        }}
                      
                    )}/>*/}
                  </Box>
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

            {/* <h3>{`${formValues.producto}  ${isAcabado()} ${
              formValues.precio * formValues.cantidad
            }`}</h3> */}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ManualInput2;
