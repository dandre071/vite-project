import {
  Alert,
  AlertTitle,
  Autocomplete,
  Box,
  Button,
  Collapse,
  Grid,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FormSelect2 from "../Forms/FormSelect2";
import { ErrorMessage, Form, useFormik, validateYupSchema } from "formik";
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
import { CheckIcon } from "lucide-react";
import CloseRounded from "@mui/icons-material/CloseRounded";
import ErrorAlert from "../Alerts/ErrorAlert";
import CloseIcon from "@mui/icons-material/Close";
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
  const [alertOpen, setAlertOpen] = useState(true);
  const handleOpenAlert = () => setAlertOpen(true);
  const handleCloseAlert = () => setAlertOpen(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    //  handleOpen();
    addData(formik.values);

    //setShowSuccess(true);

    navigate("/product-module");

    console.log(formik.values);
  };

  /*  const handleSubmit = (e) => {
    e.preventDefault();

    

    // setIsSubmitting(true);
  }; */
  const checkError = () => {
    //const formError = Object.keys(formik.errors).length > 0 && console.log(formik.errors);
    const formError = Object.keys(formik.errors);
    console.log(formError);
  };
  const formik = useFormik(
    {
      initialValues: {
        billType: "Recibo",
        clientType: "",
        name: "",
        email: "",
        phone: "",
        nit: "",
        //receives: "",
      },
      validationSchema: PersonSchema,
      onSubmit: handleSubmit,
      /*  validateOnChange: false,
      validateOnBlur: true,
       */

      /* onSubmit: (values, { validate }) => {
        validateYupSchema(values, PersonSchema);
        if (Yup.ValidationError) console.log(Yup.ValidationError);
      }, */
      validateOnChange: true,
      validateOnBlur: false,
      // validationSchema: PersonSchema,

      /* if (errors) {
        // Handle validation errors
        //handleOpen;
        console.log(errors);
      } else {
        // Submit the form data to your backend
        console.log(formik.values);
      } */
    }
    /*  onSubmit: () => {
      formik.errors.phone && handleOpen(); */
    //addData(formik.values);
    //handleOpen();

    //setShowSuccess(true);

    // navigate("/product-module");

    /*   console.log(formik.values);
    }, */
  );

  const validate = () => {};

  console.log(Object.keys(formik.errors).length);
  console.log(formik.errors);

  /* const validate = () => {
    PersonSchema.validate(formik.values, { abortEarly: false })
      .then((responseData) => {
        console.log("no validation errors");
        console.log(responseData);
        handleOpen;
      })
      .catch((err) => {
        console.log(err);
        console.log(err.name); // ValidationError
        console.log(err.errors);
      });
  }; */

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
  console.log(formik);

  /* const openErrorModal = () => {
    formik.errors.phone && setOpen(false);
  }; */

  return (
    <Box>
      {/* <Error
        open={open}
       
        handleClose={handleClose}
      /> */}

      <form
        /* onSubmit={formik.handleSubmit} */ style={{ alignSelf: "center" }}
      >
        {/* {formik.errors.phone && <Error />} */}

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
              error={formik.touched.phone && formik.errors.phone}
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
            pointer={errors && "none"}
            /* onClick={formik.handleSubmit} */
            onClick={formik.handleSubmit}
            className={errors ? "disabled-btn" : "arrow-btn"}
            /*   pointer={errors && "none"}
            className={errors ? "disabled-btn" : "arrow-btn"} */
          />

          {/*  </Button> */}
        </Grid>
      </form>

      {errors && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error Alert with a scary title.
        </Alert>
      )}
    </Box>
  );
};

export default PersonalData;
