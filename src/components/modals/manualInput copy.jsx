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
import { object, string, number, date, boolean } from "yup";

const module = "ManualInput";

const ManualInput2 = ({ text }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    resetForm();
    setOpen(false);
  };
  const productSchema = object().shape({
    name: string().required("Invalid email address"),
    //.min(1, "El nombre tiene que tener al menos un carácter")
    // .max(10, "El nombre no puede superar los 10 carácteres"),
    price: number().required().positive().integer(),
    quantity: number().required().positive().integer(),
    description: string(),
    //height: number().required().positive(),
    //width: number().required().positive(),
    //matWidth: number().required().positive(),
    finish: string().required(),
    finishQ: number()?.required().positive(),
    //material: string().required(),
    //descolillado: string().required(),
    // transfer: boolean(),
  });
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
      finish: "Sin acabado",
      finishQ: 1,
      material: "",
      descolillado: "",
      transfer: false,
      itemTotalPrice: 0,
    },
    validationSchema: productSchema,
    //onSubmit: handlerAdd,
  });

  console.log(formik.values);
  const totalCalc = () => {
    formik.setValues({
      ...formik.values,
      itemTotalPrice: formik.values.quantity * formik.values.price,
    });
  };
  /*   const {
    //handlerAdd,
    //totalCalc,
    resetForm,
  } = useProduct(addItem, formik.values); */
  const resetForm = () => {
    formik.setValues(formik.initialValues);
    // setProducts(initialState);
  };
  const handlerAdd = (e) => {
    e.preventDefault();

    addItem({
      ...formik.values,
      id: uuidv4(),
    });

    resetForm();
    setOpen(false);
  };

  const errorMessage = (message) => (
    <p className="validation-error-message">{message}</p>
  );
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
                onSubmit={handlerAdd}
                noValidate
                //onChange={handleInputChange}
                //onChange={formik.handleChange}
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
                      value={formik.values.name}
                      fullWidth
                      label={"Producto"}
                      type="text"
                      InputProps={{
                        style: { ...inputPropsConf },
                      }}
                      sx={{ ...textStyles }}
                      // onChange={handleInputChange}
                      onChange={formik.handleChange}
                    />
                    {/* <ErrorMessage name="name" render={errorMessage} /> */}
                  </Grid>
                  <Grid item sm={8} xs={8}>
                    <TextField
                      name="price"
                      fullWidth
                      label={"Precio"}
                      type="number"
                      value={formik.values.price}
                      InputProps={{
                        style: inputPropsConf,
                      }}
                      sx={textStyles}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item sm={4} xs={4}>
                    <TextField
                      value={formik.values.quantity}
                      name="quantity"
                      fullWidth
                      label={"Cantidad"}
                      type="number"
                      InputProps={{
                        style: { ...inputPropsConf, textAlign: "right" },
                      }}
                      sx={{ ...textStyles, textAlign: "right" }}
                      onChange={formik.handleChange}
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
                        onChange={formik.handleChange}
                      />

                      {(formik.values.finish == "Ojales" ||
                        formik.values.finish == "Bolsillos") && (
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
                          value={formik.values.finishQ}
                          name="finishQ"
                          InputProps={{
                            style: inputPropsConf,
                          }}
                          onChange={formik.handleChange}
                        />
                      )}
                    </Box>
                  </Grid>
                  {/*Total price module*/}
                  <Grid item sm={12} xs={12}>
                    <PriceCalc
                      value={formik.values.itemTotalPrice}
                      name={"itemTotalPrice"}
                      //onChange={totalCalc}
                      text={`${colPesos.format(formik.values.itemTotalPrice)}`}
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
                      value={formik.values.description}
                      rows={3}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                </Grid>
                {/*  <h2>{`${items[52].name}- ${items[52].finish}`}</h2> */}{" "}
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
                  <AddBtn onSubmit={formik.handleSubmit} />
                </Grid>
              </form>{" "}
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ManualInput2;
