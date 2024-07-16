import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormSelect2 from "../Forms/FormSelect2";
import { Form, useFormik } from "formik";
import { options } from "../utils/options";
import { PersonSchema } from "../Validations";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { usePersonalData, useShoppingCart } from "../../store/shoppingCart";
import { ArrowForward } from "@mui/icons-material";
import { fakeUsers } from "../utils/test";
const PersonalData = () => {
  /* getLocalStorage("personal-data");
  console.log(getLocalStorage("personal-data"));
 */

  //const localStore = usePersonalData((state) => state.getData());
  const users = fakeUsers.map((user) => user.name);

  /* const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key)); */

  /*   localStore
    ? formik.setValues({
        ...formik.values,
        email: fakeUsers[userFound].email,
        phone: fakeUsers[userFound].phone,
        nit: fakeUsers[userFound].nit,
      })
    : console.log("nothing");

  console.log(localStore); */

  //use product hook
  const disable = () => {
    if (formik.errors) {
      return true;
    }
    return;
  };
  const handleSubmit = () => {
    addData(formik.values);
    console.log(formik.values);
  };

  const formik = useFormik({
    initialValues: {
      billType: "Recibo",
      clientType: "Particular",
      name: "dffdfd",
      email: "",
      phone: "",
      nit: "",
      //receives: "",
    },
    validationSchema: PersonSchema,

    onSubmit: handleSubmit,
  });
  // console.log(formik.values);
  const addData = usePersonalData((state) => state.addData);
  const localStore = usePersonalData((state) => state.personalData);
  console.log(localStore[0].name);

  const handleAutoChange = (event, value) => (formik.values.name = value);

  const user = "diego";
  useEffect(() => {
    formik.setValues({
      ...formik.values,
      billType: localStore[0].billType,
      clientType: localStore[0].clientType,
      name: localStore[0].name,
      email: localStore[0].email,
      phone: localStore[0].phone,
      nit: localStore[0].nit,
    });
  }, []);
  /* */

  const checkUser = () => {
    const selectedUser = formik.values.name;
    const userFound = users.indexOf(selectedUser);
    // console.log(fakeUsers.indexOf(userFound));
    console.log(userFound);
    formik.setValues({
      ...formik.values,
      email: fakeUsers[userFound].email,
      phone: fakeUsers[userFound].phone,
      nit: fakeUsers[userFound].nit,
    });
  };

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container flexGrow={1} spacing={1}>
          <Grid item sm={8}>
            <FormSelect2
              required
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
          <Grid item sm={10}>
            {/*  <TextField
              required
              onBlur={formik.handleBlur}
              error={formik.errors.name}
              helperText={formik.errors.name}
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              fullWidth
              label={"Nombre / Razón Social"}
              type="text"
            /> */}
            <Autocomplete
              freeSolo={true}
              autoHighlight
              id="combo-box-demo"
              options={users}
              sx={{ width: 300 }}
              required
              onBlur={formik.handleBlur}
              error={formik.errors.name}
              helperText={formik.errors.name}
              name="name"
              onChange={handleAutoChange}
              fullWidth
              renderInput={(params) => (
                <TextField
                  name="name"
                  {...params}
                  label="Nombre / Razón Social"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </Grid>
          <Grid item sm={2}>
            <Button onClick={checkUser} variant="success">
              <ArrowForwardIcon sx={{ color: "white", fontSize: 40 }} />
            </Button>
          </Grid>
          <Grid item sm={12}>
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
              type="text"
            />
          </Grid>
          <Grid item sm={7}>
            <TextField
              onBlur={formik.handleBlur}
              error={formik.errors.phone}
              helperText={formik.errors.phone}
              value={formik.values.phone}
              name="phone"
              onChange={formik.handleChange}
              fullWidth
              label={"Teléfono"}
              type="number"
            />
          </Grid>
          {/* <Grid item sm={4}>
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
          </Grid> */}
        </Grid>
        {formik.errors && (
          <Button onClick={formik.handleSubmit} endIcon={<ArrowForwardIcon />}>
            Siguiente
          </Button>
        )}
      </form>
    </Box>
  );
};

export default PersonalData;
