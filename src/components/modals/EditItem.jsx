import { Box, Button, Grid, InputAdornment, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { productSchema } from "../Validations";
import { useShoppingCart } from "../../store/shoppingCart";
import FormSelect2 from "../Forms/FormSelect2";
import { options } from "../utils/options";
import PriceCalc from "../PriceCalc.jsx";
import { colPesos } from "../utils/configs.js";
const EditItem = () => {
  const handlerAdd = (e) => {
    addItem({
      ...formik.values,
      id: uuidv4(),
    });
    formik.resetForm();
    setOpen(false);
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
      finish: [],
      finishQ: 1,
      material: "",
      descolillado: "",
      transfer: false,
      itemTotalPrice: 0,
      orientation: "",
    },
    validationSchema: productSchema,

    onSubmit: handlerAdd,
  });
  const addItem = useShoppingCart((state) => state.addItem);
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "80px 1fr",
        borderRadius: 2,
        width: 600,
        height: 500,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          bgcolor: "primary.dark",
          display: "grid",
          placeContent: "center",
          color: "white",
          fontSize: 35,
          fontWeight: 600,
          letterSpacing: 2,
        }}
      >
        header
      </Box>
      <Grid
        container
        sx={{
          bgcolor: "white",
          placeContent: "center",
        }}
      >
        <Grid
          container
          sx={{
            width: "90%",
            height: "85%",
            bgcolor: "red",
          }}
        >
          <Grid item lg={12}>
            <TextField
              onBlur={formik.handleBlur}
              error={formik.errors.name}
              helperText={formik.errors.name}
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              fullWidth
              label={"Producto"}
              type="text"
            />
          </Grid>
          <Grid item lg={4} xs={8}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    InputProps={{ fontSize: 40 }}
                  >
                    $
                  </InputAdornment>
                ),
              }}
              error={formik.errors.price}
              helperText={formik.errors.price}
              value={formik.values.price}
              //onChange={formik.handleChange}
              onChange={(e) => {
                formik.setValues({
                  ...formik.values,
                  price: e.target.value,
                  itemTotalPrice: e.target.value * formik.values.quantity,
                });
              }}
              name="price"
              fullWidth
              label={"Precio"}
              type="number"
            />
          </Grid>
          <Grid item lg={2}>
            <TextField
              error={formik.errors.quantity}
              helperText={formik.errors.quantity}
              value={formik.values.quantity}
              name="quantity"
              fullWidth
              label={"Cantidad"}
              type="number"
              onChange={(e) => {
                formik.setValues({
                  ...formik.values,
                  quantity: e.target.value,
                  itemTotalPrice: e.target.value * formik.values.price,
                });
              }}
            />
          </Grid>
          <Grid item lg={3} xs={4}>
            <FormSelect2
              value={formik.values.finish}
              multiple={true}
              error={formik.errors.finish}
              helperText={formik.errors.finish}
              fullWidth
              name="finish"
              onChange={formik.handleChange}
              options={options.acabados}
              label={"Acabado"}
              defaultValue={"Sin acabado"}
              renderValue={(selected) => selected.join(", ")}
            />
          </Grid>
          <Grid item lg={3}>
            <FormSelect2
              value={formik.values.orientation}
              error={formik.errors.orientation}
              helperText={formik.errors.orientation}
              fullWidth
              name="orientation"
              onChange={formik.handleChange}
              options={["", "Vertical", "Horizontal"]}
              label={"Orientación"}
              /* defaultValue={"Sin acabado"} */
            />
          </Grid>
          <Grid item lg={12}>
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
            />
          </Grid>
          <Grid item lgm={12}>
            <PriceCalc
              value={formik.values.itemTotalPrice}
              name="itemTotalPrice"
              text={colPesos.format(formik.values.itemTotalPrice)}
              //onClick={totalCalc}
            />
          </Grid>
          <Grid item lg={12}>
            <Button fullWidth variant="prime" sx={{ height: "100%" }}>
              Aceptar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditItem;
