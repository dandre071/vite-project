import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FormSelect2 from "../Forms/FormSelect2";
import { ErrorMessage, Form, useFormik } from "formik";
import { options } from "../utils/options";
import { PersonSchema } from "../Validations";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { usePersonalData } from "../../store/shoppingCart";
import { ArrowForward } from "@mui/icons-material";
import { fakeUsers } from "../utils/test";
import { colPesos } from "../utils/configs";
import { formatPhoneNumber } from "../utils/helpers";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import NextBtn from "../Buttons/NextBtn";
import Error from "../modals/Error";

const PersonalData = () => {
  const localStore = usePersonalData((state) => state.personalData);
  const addData = usePersonalData((state) => state.addData);
  const users = fakeUsers.map((user) => user.name);
  const navigate = useNavigate();
  /* const disable = () => {
    if (formik.errors) {
      return true;
    }
    return;
  }; */

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    handleOpen();
    // addData(formik.values);

    //setShowSuccess(true);

    // navigate("/product-module");

    console.log(formik.values);
  };
  const isError = () => {
    formik.errors.phone ? setOpen(true) : setOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      billType: "Recibo",
      clientType: "",
      name: "",
      email: "",
      phone: "",
      nit: "",
      //receives: "",
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: PersonSchema,

    onSubmit: handleSubmit,
    /*  onSubmit: () => {
      formik.errors.phone && handleOpen(); */
    //addData(formik.values);
    //handleOpen();

    //setShowSuccess(true);

    // navigate("/product-module");

    /*   console.log(formik.values);
    }, */
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

  //console.log(localStore);

  const handleAutoChange = (event, value) => {
    formik.values.name = value;
    const found = users.filter((user) => user == formik.values.name);
    console.log(found);
  };
  console.log(formik.errors.billType);
  console.log(formik.errors);
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

  const errors =
    formik.errors.phone || formik.errors.name || formik.errors.email;
  console.log(!!errors);

  /* const openErrorModal = () => {
    formik.errors.phone && setOpen(false);
  }; */

  return (
    <Box>
      {/* <Error
        open={open}
       
        handleClose={handleClose}
      /> */}
      <Button onClick={formik.handleOpen}>Open modal</Button>
      <form style={{ alignSelf: "center" }}>
        {formik.errors.phone && <Error />}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div
            style={{ width: 500, height: 500, backgroundColor: "red" }}
          ></div>
        </Modal>

        {/* <ErrorMessage component={<Error />} /> */}
        <Grid container flexGrow={1} spacing={1.5}>
          <Grid item sm={8}>
            <FormSelect2
              onBlur={formik.handleBlur}
              value={formik.values.billType}
              error={formik.errors.billType}
              //helperText={}
              fullWidth
              name="billType"
              onChange={formik.handleChange}
              options={options.billType}
              label={"Tipo de recibo"}
            />
            {formik.errors.billType && <p>{formik.errors.billType}</p>}
          </Grid>
          <Grid item sm={4}>
            <FormSelect2
              value={formik.values.clientType}
              onBlur={formik.handleBlur}
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
              value={formik.values.name}
              //helperText={formik.errors.name}
              error={formik.errors.name}
              freeSolo={true}
              name="name"
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
                  error={formik.errors.name}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
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
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
              fullWidth
              //defaultValue={localStore.email}
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
              //defaultValue={localStore.phone}
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
          <NextBtn
            //pointer={errors && "none"}
            /* onClick={formik.handleSubmit} */
            onClick={formik.handleSubmit}
            className={"arrow-btn"}
            /*   pointer={errors && "none"}
            className={errors ? "disabled-btn" : "arrow-btn"} */
          />

          {/*  </Button> */}
        </Grid>
      </form>
    </Box>
  );
};

export default PersonalData;
