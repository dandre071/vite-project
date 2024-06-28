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
import { useFormik } from "formik";

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

  //console.log(formik.errors);
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
        <Box>
          <Box
            //borderRadius="10px"
            sx={{
              ...styleConf,
              alignContent: "center",
              justifyContent: "center",
              display: "grid",
              gridTemplateRows: "2fr 1fr",
              pt: 0,
            }}
          >
            <Box
              sx={{
                position: "relative",
                top: 30,
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              <ModalHeader title={"Configuración Manual"} style={{}} />
            </Box>

            <Box
              borderRadius="10px"
              sx={{
                pt: 5,
                pr: 6,
                pl: 6,
                pb: 1,

                borderRadius: 3,
                bgcolor: "white",
              }}
            >
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={1.5} sx={{ flexGrow: 1, p: 0, m: 0 }}>
                  <Grid item sm={12}></Grid>
                  <Grid item sm={12} xs={12}>
                    <TextField
                      onBlur={formik.handleBlur}
                      error={formik.errors.name && formik.touched.name}
                      helperText={formik.errors.name}
                      value={formik.values.name}
                      name="name"
                      onChange={formik.handleChange}
                      fullWidth
                      label={"Producto"}
                      type="text"
                      InputProps={{
                        style: inputPropsConf,
                      }}
                    />
                    {/* {formik.errors.name && <p>{formik.errors.name}</p>} */}
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
                      InputProps={{
                        style: inputPropsConf,
                      }}
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
                    <PriceCalc
                      value={formik.values.itemTotalPrice}
                      name={"itemTotalPrice"}
                      text={`${colPesos.format(formik.values.itemTotalPrice)}`}
                      onClick={totalCalc}
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
                        error={formik.errors.finish}
                        helperText={formik.errors.finish}
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
