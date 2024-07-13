import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import FormSelect2 from "../Forms/FormSelect2";
import { Form, useFormik } from "formik";
import { options } from "../utils/options";
import { PersonSchema } from "../Validations";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { usePersonalData } from "../../store/shoppingCart";
const PersonalData = () => {
  /* const handlerAdd = (e) => {
    addItem({
      ...formik.values,
    });
  }; */

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

  //use Zustand store
  // const addItem = useShoppingCart((state) => state.addItem);
  //use product hook
  const disable = () => {
    if (formik.errors) {
      return true;
    }
    return;
  };
  const handleSubmit = (e) => {
    addData(formik.values);
    console.log(formik.values);
  };
  const formik = useFormik({
    initialValues: {
      billType: "",
      clientType: "",
      name: "",
      email: "",
      phone: null,
      nit: null,
      receives: "",
    },
    validationSchema: PersonSchema,

    onSubmit: handleSubmit,
  });
  const addData = usePersonalData((state) => state.addData);
  // console.log(formik.values);
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          flexGrow={1}
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item sm={8}>
            <FormSelect2
              value={formik.values.billType}
              error={formik.errors.billType}
              helperText={formik.errors.billType}
              fullWidth
              name="billType"
              onChange={formik.handleChange}
              options={options.billType}
              label={"Tipo de recibo"}
            />
          </Grid>
          <Grid item sm={4}>
            <FormSelect2
              value={formik.values.clientType}
              error={formik.errors.clientType}
              helperText={formik.errors.clientType}
              fullWidth
              name="clientType"
              onChange={formik.handleChange}
              options={options.userType}
              label={"Cliente"}
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              onBlur={formik.handleBlur}
              error={formik.errors.name}
              helperText={formik.errors.name}
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              fullWidth
              label={"Nombre / Razón Social"}
              type="text"
            />
          </Grid>
          <Grid item sm={7}>
            <TextField
              onBlur={formik.handleBlur}
              error={formik.errors.email}
              helperText={formik.errors.email}
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
              fullWidth
              label={"Email"}
              type="email"
            />
          </Grid>
          <Grid item sm={5}>
            <TextField
              onBlur={formik.handleBlur}
              error={formik.errors.nit}
              helperText={formik.errors.nit}
              value={formik.values.nit}
              name="nit"
              onChange={formik.handleChange}
              fullWidth
              label={"NIT"}
              type="number"
            />
          </Grid>
          <Grid item sm={8}>
            <TextField
              onBlur={formik.handleBlur}
              error={formik.errors.phone}
              helperText={formik.errors.phone}
              value={formik.values.phone}
              name="phone"
              onChange={formik.handleChange}
              fullWidth
              label={"Teléfono"}
              type="phone"
            />
          </Grid>
          <Grid item sm={4}>
            <FormSelect2
              value={formik.values.receives}
              error={formik.errors.receives}
              helperText={formik.errors.receives}
              fullWidth
              name="receives"
              onChange={formik.handleChange}
              options={options.users}
              label={"Recibe"}
            />
          </Grid>
        </Grid>
        <Button onClick={handleSubmit} endIcon={<ArrowForwardIcon />}>
          Siguiente
        </Button>
      </form>
    </Box>
  );
};

export default PersonalData;
