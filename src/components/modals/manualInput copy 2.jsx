import Box from "@mui/material/Box";
import { Divider, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ModalHeader from "../ModalHeader";
import AddBtn from "../Buttons/AddBtn.jsx";
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

import { colPesos } from "../utils/configs.js";
import PriceCalc from "../PriceCalc.jsx";

import { v4 as uuidv4 } from "uuid";
import { productSchema } from "../Validations.js";
import { useFormik, Formik, Field, ErrorMessage } from "formik";

const module = "ManualInput";

const ManualInput2 = ({ text }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    resetForm();
    setOpen(false);
  };

  const initialState = {
    id: "",
    module: "ManualInput",
    name: "",
    price: null,
    quantity: 1,
    description: "",
    height: 0,
    width: 0,
    matWidth: 0,
    finish: "Sin acabado",
    finishQ: 1,
    material: "",
    descolillado: "",
    transfer: false,
    itemTotalPrice: 0,
  };
  const styleParams = { radius: 20, padd: 6 };
  //use Zustand store
  const items = useShoppingCart((state) => state.items);
  const addItem = useShoppingCart((state) => state.addItem);
  //use product hook
  const {
    products,

    handleInputChange,
    handlerAdd,
    totalCalc,
    resetForm,
  } = useProduct(addItem, initialState);

  /* const formik = useFormik({
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
      finish: "Sin acabado",
      finishQ: 1,
      material: "",
      descolillado: "",
      transfer: false,
      itemTotalPrice: 0,
    },
    validationSchema: productSchema,
    onSubmit: handlerAdd,
  }); */

  /*  const handlerAdd = async (e) => {
    e.preventDefault();

    try {
      await schema.validate(recipe, {
        abortEarly: false,
      });
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        if (error.path && !validationErrors[error.path]) {
          validationErrors[error.path] = error.message;
        }
      });
    addItem({
      ...products,
      id: uuidv4(),
    });

    resetForm();
    //}
  };
 */
  return (
    <Box>
      <OpenModalBtn text={text} onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Box
            borderRadius="10px"
            sx={{
              ...styleConf,
              alignContent: "center",
              justifyContent: "center",
              display: "grid",
              gridTemplateRows: "1fr 2fr 1fr",
              pt: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "end    ",
              }}
            >
              <ModalHeader title={"Configuración Manual"} style={{}} />
            </Box>

            <Box
              borderRadius="10px"
              sx={{
                pt: 0,
                pr: 6,
                pl: 6,
                pb: 1,
                borderTopRightRadius: styleParams.radius,
                borderTopLeftRadius: styleParams.radius,
                bgcolor: "white",
              }}
            >
              <form
                //onSubmit={handlerAdd}

                noValidate
                onChange={handleInputChange}
              >
                <Grid container spacing={1.5} sx={{ flexGrow: 1, p: 0, m: 0 }}>
                  <Grid item sm={12}></Grid>
                  <Grid item sm={12} xs={12}>
                    <TextField
                      required
                      //fieldState={!error}
                      //error={!products.name}
                      //helperText="Campo requerido."
                      //helperText={
                      /* products.name == 0 ? "Campo requerido" : "ererer" */
                      //  textFieldError()
                      // }
                      name="name"
                      //value={formik.values.name}
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
                        style: { ...inputPropsConf, textAlign: "right" },
                      }}
                      sx={{ ...textStyles, textAlign: "right" }}
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
                  {/*Total price module*/}
                  <Grid item sm={12} xs={12}>
                    <PriceCalc
                      name={"itemTotalPrice"}
                      onChange={totalCalc}
                      text={`${colPesos.format(products.itemTotalPrice)}`}
                      onClick={totalCalc}
                    />
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
                      rows={3}
                    />
                  </Grid>
                </Grid>
                {/*  <h2>{`${items[52].name}- ${items[52].finish}`}</h2> */}
              </form>{" "}
              <Grid
                item
                sm={12}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  pt: 2,
                  pb: 2,
                }}
              >
                <AddBtn onClick={handlerAdd} />
              </Grid>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ManualInput2;
