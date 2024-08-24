import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FormSelect2 from "../Forms/FormSelect2";
import { Form, useFormik } from "formik";
import { options } from "../utils/options";
import { PersonSchema } from "../Validations";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { usePersonalData } from "../../store/shoppingCart";
import { ArrowForward } from "@mui/icons-material";
import { fakeUsers } from "../utils/test";
import { colPesos } from "../utils/configs";
import { formatPhoneNumber } from "../utils/helpers";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const PersonalData = () => {
  const localStore = usePersonalData((state) => state.personalData);

  const users = fakeUsers.map((user) => user.name);

  /* const disable = () => {
    if (formik.errors) {
      return true;
    }
    return;
  }; */
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

  useEffect(() => {
    const updateState = () => {
      formik.setValues({
        billType: localStore.billType,
        clientType: localStore.clientType,
        name: localStore.name,
        email: localStore.email,
        phone: localStore.phone,
      });
    };
    updateState();
  }, []);

  const addData = usePersonalData((state) => state.addData);
  console.log(localStore);

  const handleAutoChange = (event, value) => {
    formik.values.name = value;
    const found = users.filter((user) => user == formik.values.name);
    console.log(found);
  };

  /*  const user = "diego";

  const errors = formik.errors.name;
  console.log({ ...formik });
  console.log(formik.errors.toString());
  const foundName = users.filter((user) => user == formik.values.name);
  console.log(foundName); */
  /* const checkUser = () => {
    const selectedUser = formik.values.name;
    const userFound = users.indexOf(selectedUser);
    formik.setValues({
      ...formik.values,
      email: fakeUsers[userFound].email,
      phone: fakeUsers[userFound].phone,
      nit: fakeUsers[userFound].nit,
    });
  };
  const clientName = localStore.name;

  console.log(clientName); */
  // console.log(users);

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container flexGrow={1} spacing={1.5}>
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
          <Grid
            item
            sm={12}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Autocomplete
              fullWidth
              //helperText={formik.errors.name}
              error={formik.errors.name}
              freeSolo={true}
              autoHighlight
              id="combo-box-demo"
              options={users}
              sx={{
                textTransform: "capitalize",
              }}
              defaultValue={localStore.name}
              onBlur={formik.handleBlur}
              //onChange={handleAutoChange}

              //autoCapitalize="initial"
              renderInput={(params) => (
                <TextField
                  //error={() => formik.errors.name}
                  helperText={formik.errors.name}
                  name="name"
                  fullWidth
                  onChange={formik.handleChange}
                  {...params}
                  label="Nombre / Razón Social"
                  InputProps={{
                    ...params.InputProps,
                  }}
                />
              )}
            />

            {/* {!formik.values.name == "" && (
              <Button
                onClick={checkUser}
                variant="success"
                sx={{ width: "10%" }}
              >
                <ArrowForwardIcon sx={{ color: "white", fontSize: 40 }} />
              </Button>
            )} */}
          </Grid>

          <Grid item sm={8}>
            <TextField
              onBlur={formik.handleBlur}
              error={formik.errors.email}
              helperText={formik.errors.email}
              /* value={formik.values.email} */
              name="email"
              onChange={formik.handleChange}
              fullWidth
              defaultValue={localStore.email}
              label={"Email"}
              type="email"
            />
          </Grid>

          <Grid item sm={4}>
            <TextField
              onBlur={formik.handleBlur}
              error={formik.errors.phone}
              helperText={formik.errors.phone}
              //value={colPesos.format(formik.values.phone)}
              // value={formik.values.phone}
              defaultValue={localStore.phone}
              name="phone"
              onChange={formik.handleChange}
              fullWidth
              label={"Teléfono"}
              type="text"
            />
          </Grid>
        </Grid>
        {/*    <Grid>
          <Stack>
            {formik.errors.name && (
              <Typography>{formik.errors.name}</Typography>
            )}
            {formik.errors.email && (
              <Typography>{formik.errors.email}</Typography>
            )}
            {formik.errors.phone && (
              <Typography>{formik.errors.phone}</Typography>
            )}
          </Stack>
        </Grid> */}
        <Grid
          item
          sx={{
            height: 70,
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Link to={"/product-module"}>
            <Button
              disableRipple
              className="nav-btn"
              disabled={
                formik.errors.email || formik.errors.phone ? true : false
              }
              variant="primary"
              sx={{ height: "80%" }}
              onClick={handleSubmit}
              endIcon={<ArrowForwardIcon />}
            >
              Siguiente
            </Button>
          </Link>
        </Grid>
      </form>
    </Box>
  );
};

export default PersonalData;
