import {
  Autocomplete,
  Box,
  Button,
  Grid,
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

const PersonalData = () => {
  const users = fakeUsers.map((user) => user.name);

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
  const localData = usePersonalData((state) => state.personalData);
  const localStore = usePersonalData((state) => state.personalData);
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

  const addData = usePersonalData((state) => state.addData);
  console.log(localStore);

  const handleAutoChange = (event, value) => {
    formik.values.name = value;
    const found = users.filter((user) => user == formik.values.name);
    console.log(found);
  };

  const user = "diego";

  const errors = formik.errors;
  console.log(errors);
  const foundName = users.filter((user) => user == formik.values.name);
  console.log(foundName);
  const checkUser = () => {
    const selectedUser = formik.values.name;
    const userFound = users.indexOf(selectedUser);
    formik.setValues({
      ...formik.values,
      email: fakeUsers[userFound].email,
      phone: fakeUsers[userFound].phone,
      nit: fakeUsers[userFound].nit,
    });
  };
  console.log(users);

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
          <Grid
            item
            sm={12}
            sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}
          >
            <Autocomplete
              fullWidth
              helperText={formik.errors.name}
              error={formik.errors.name}
              defaultValue={() => localStore[0].name || ""}
              freeSolo={true}
              autoHighlight
              id="combo-box-demo"
              options={users}
              sx={{
                textTransform: "capitalize",
              }}
              onBlur={formik.handleBlur}
              //onChange={handleAutoChange}

              //autoCapitalize="initial"
              renderInput={(params) => (
                <TextField
                  //error={() => formik.errors.name}
                  //helperText={formik.errors.name}
                  //error={formik.errors.name}
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
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
              fullWidth
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
              value={formik.values.phone}
              name="phone"
              onChange={formik.handleChange}
              fullWidth
              label={"Teléfono"}
              type="tel"
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

        {/* <Button onClick={formik.handleSubmit} endIcon={<ArrowForwardIcon />}>
          Siguiente
        </Button> */}
        <Grid
          item
          sx={{
            height: 70,
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          {" "}
          <Button
            sx={{ height: "80%" }}
            onClick={handleSubmit}
            endIcon={<ArrowForwardIcon />}
          >
            Siguiente
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default PersonalData;
