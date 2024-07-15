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
  const localStore = usePersonalData((state) => state);
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
      name: "",
      email: "",
      phone: "",
      nit: "",
      //receives: "",
    },
    validationSchema: PersonSchema,

    onSubmit: handleSubmit,
  });
  console.log(formik.values);
  const addData = usePersonalData((state) => state.addData);
  // console.log(formik.values);

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
    //formik.values.phone = fakeUsers[userId].phone;

    // return userId;
  };

  /*  useEffect(() => {
    const localData = JSON.parse(window.localStorage.getItem(key));
    return localData;
  });
  const getLocalStorage = (key) => {
    formik.setValues({
      ...formik.values,
      email: localData.email,
      phone: localData.phone,
      nit: localData.nit,
    });
  };
  getLocalStorage("personal-data"); */
  // console.log(fakeUsers.filter((user) => user.name.indexOf(selectedUser)));

  const getData = () => {
    const localData = JSON.parse(localStorage.getItem("personal-data"));
    console.log(localData);
  };
  getData();

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
              onChange={(event, value) => (formik.values.name = value)}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label="Nombre / Razón Social" />
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
