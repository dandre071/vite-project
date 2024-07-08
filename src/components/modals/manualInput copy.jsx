import Box from "@mui/material/Box";
import {
  Button,
  Divider,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
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
import Alert from "@mui/material/Alert";
import { useShoppingCart } from "../../store/shoppingCart.js";
import { colPesos } from "../utils/configs.js";
import PriceCalc from "../PriceCalc.jsx";
import { v4 as uuidv4 } from "uuid";
import { productSchema } from "../Validations.js";
import { useFormik } from "formik";

import { ThemeProvider } from "styled-components";
import { customTheme } from "../../Hooks/useCustomTheme.jsx";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { AddBoxOutlined } from "@mui/icons-material";
const module = "ManualInput";

const ManualInput2 = ({ text }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    //resetForm();
    formik.resetForm();
    setOpen(false);
  };
  const handlerAdd = (e) => {
    addItem({
      ...formik.values,
      id: uuidv4(),
    });
    formik.resetForm();
    setOpen(false);
  };
  //const [disabled, setDisabled] = useState(!formik.errors);

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
  //const items = useShoppingCart((state) => state.items);
  const addItem = useShoppingCart((state) => state.addItem);
  //use product hook
  const disable = () => {
    ///formik.values.price > 0 && formik.values.quantity > 0 ? false : true;
    formik.errors.price || formik.errors.quantity ? true : false;
  };
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

    onSubmit: handlerAdd,
  });
  const errors = formik.errors;
  console.log({ errors });
  const totalCalc = () => {
    formik.setValues({
      ...formik.values,
      itemTotalPrice: formik.values.quantity * formik.values.price,
    });
  };

  return (
    <Box>
      <OpenModalBtn text={text} onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              ...styleConf,

              width: "auto",
              // minHeight: customTheme.height[8],
              bgcolor: "white",

              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              flexWrap: "wrap",
              alignContent: "center",
              justifyContent: "center",
              pt: 1,
              pb: 1,
              /* gridTemplateRows: "2fr 1fr",*/

              borderRadius: customTheme.shape.borderRadius,
            }}
          >
            <Box
              sx={{
                p: customTheme.p[5],
                pt: customTheme.p[1],
                pb: customTheme.p[1],

                width: customTheme.width[6],
                //  height: customTheme.height[5],

                borderRadius: 3,
                // bgcolor: "orange",
                bgcolor: "white",
              }}
            >
              {/* <Box
                sx={{
                  position: "absolute",
                  justifySelf: "center",
                  top: -50,
                  //left: 25,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "end",
                  //backgroundColor: "red",
                }}
              >
                <ModalHeader title={"Configuración Manual"} style={{}} />
              </Box> */}
              <Box
                sx={{
                  height: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 900 }}>
                  Configuración Manual
                </Typography>
              </Box>
              <ThemeProvider theme={customTheme}>
                <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={1.5} sx={{ flexGrow: 1 }}>
                    {/* <Grid item sm={12}></Grid> */}
                    <Grid item sm={12} xs={12}>
                      <TextField
                        onBlur={formik.handleBlur}
                        error={formik.errors.name /* && formik.touched.name */}
                        helperText={formik.errors.name}
                        value={formik.values.name}
                        name="name"
                        onChange={formik.handleChange}
                        fullWidth
                        label={"Producto"}
                        type="text"
                        //sx={inputStyle}
                        //variant="primary"
                        //InputProps={{
                        //  style: inputPropsConf,
                        //}}
                        //SelectProps={{ bgcolor: "white" }}

                        //InputLabelProps={InputLabelProps}
                      />
                      {/* {formik.errors.name && <p>{formik.errors.name}</p>} */}

                      {/*   {formik.errors.name && (
                        <Alert severity="error" sx={{ fontSize: 10 }}>
                          {formik.errors.name}
                        </Alert>
                      )} */}
                    </Grid>
                    <Grid item sm={8} xs={8}>
                      <TextField
                        error={formik.errors.price}
                        helperText={formik.errors.price}
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        name="price"
                        fullWidth
                        label={"Precio"}
                        type="number"
                        //InputProps={{
                        //style: inputPropsConf,
                        //}}
                        // InputLabelProps={InputLabelProps}
                      />
                    </Grid>
                    <Grid item sm={4} xs={4}>
                      <TextField
                        error={formik.errors.quantity}
                        helperText={formik.errors.quantity}
                        value={formik.values.quantity}
                        name="quantity"
                        fullWidth
                        label={"Cantidad"}
                        type="number"
                        onChange={formik.handleChange}
                      />
                    </Grid>

                    {/* {formik.values.price > 0 && ( */}
                    <Grid item sm={12} xs={12}>
                      <PriceCalc
                        disabled={
                          formik.errors.price ||
                          formik.errors.quantity ||
                          !formik.values.price
                            ? true
                            : false
                        }
                        value={formik.values.itemTotalPrice}
                        name={"itemTotalPrice"}
                        text={`${colPesos.format(
                          formik.values.itemTotalPrice
                        )}`}
                        onClick={totalCalc}
                      />
                    </Grid>
                    {/* )} */}

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
                          error={formik.errors.finish}
                          helperText={formik.errors.finish}
                          fullWidth
                          name="finish"
                          options={acabados}
                          label={"Acabado"}
                          //theme={themeColors}
                          //style={{ textStyles }}
                          // sx={{ borderRadius: 20 }}
                          defaultValue={"Sin acabado"}
                          onChange={formik.handleChange}
                          // InputLabelProps={InputLabelProps}
                        />

                        {(formik.values.finish == "Ojales" ||
                          formik.values.finish == "Bolsillos") && (
                          <TextField
                            sx={{
                              //...inputPropsConf,
                              color: themeColors.darkText,
                              width: "49%",
                              borderRadius: 2,
                            }}
                            fullWidth
                            type={"number"}
                            label={"Cantidad"}
                            defaultValue={1}
                            //variant={"outlined"}
                            value={formik.values.finishQ}
                            name="finishQ"
                            // InputProps={{
                            //   style: inputPropsConf,
                            // }}
                            onChange={formik.handleChange}
                            // InputLabelProps={InputLabelProps}
                          />
                        )}
                      </Box>
                    </Grid>
                    {/*Total price module*/}
                    <Grid
                      item
                      sm={12}
                      xs={12}
                      sx={{ pr: 1, pl: 1, pt: 0, pb: 0 }}
                    >
                      {/* <FormInputText
                        disabled={false}
                        name={"description"}
                        errors={formik.errors.description}
                        helperText={formik.errors.description}
                        //variant={"outlined"}
                        defaultValue={""}
                        label={"Descripción del trabajo"}
                        type="text"
                        required={false}
                        //multiline
                        autofocus
                        value={formik.values.description}
                        onChange={formik.handleChange}
                      /> */}
                      <TextField
                        error={formik.errors.description}
                        helperText={formik.errors.description}
                        value={formik.values.description}
                        name="description"
                        fullWidth
                        label={"Descripción"}
                        type="text"
                        onChange={formik.handleChange}
                        minRows={2}
                        multiline
                        sx={{ pb: 3 }}
                      />
                      {/*  {formik.errors.description && (
                        <Typography>{formik.errors.description}</Typography>
                      )} */}
                    </Grid>
                    <Grid
                      item
                      sm={12}
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {/* <AddBtn onSubmit={formik.handleSubmit} /> */}

                      <Button
                        //disabled={
                        //formik.errors.name  formik.name === "" ||
                        // formik.errors.price
                        // ? true
                        // : false

                        //variant="secondary"
                        // }
                        variant="prime"
                        type="submit"
                        fullWidth
                        onSubmit={formik.handleSubmit}
                        startIcon={<AddShoppingCartIcon />}
                        //color="primary.main"
                        //
                      >
                        Agregar
                      </Button>
                    </Grid>
                    {/* <Grid item sm={12} sx={{ height: 10 }}>
                      {formik.errors.name && (
                        <Snackbar severity="error" fullWidth>
                          {formik.errors.name}
                        </Snackbar>
                      )}
                    </Grid> */}
                  </Grid>
                </form>{" "}
              </ThemeProvider>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ManualInput2;
