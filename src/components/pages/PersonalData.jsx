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
  Tooltip,
  Typography,
  Zoom,
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
import { AlertCircleIcon, CheckIcon } from "lucide-react";
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
  /*  const handleClose = () => setOpen(false); */

  const handleSubmit = () => {
    formik.isValid
      ? () => {
          formik.setErrors({
            billType: formik.errors.billType,
            clientType: formik.errors.clientType,
            name: formik.errors.name,
            email: formik.errors.email,
            phone: formik.errors.phone,
          });
          return <Modal />;
        }
      : formik.setErrors({
          billType: "",
          clientType: "",
          name: "",
          email: "",
          phone: "",
        });
    addData(formik.values);

    //setShowSuccess(true);

    navigate("/product-module");
  };
  const handleClose = () => {
    formik.setErrors({
      billType: "",
      clientType: "",
      name: "",
      email: "",
      phone: "",
    });
    setOpen(false);
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
      validateOnChange: false,
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
  const classSwitch = !formik.isValid ? "disabled-btn" : "arrow-btn";
  // console.log(Object.keys(formik.errors).length);
  //console.log(formik.errors);

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
              required
              // onBlur={formik.handleBlur}
              value={formik.values.billType}
              error={formik.touched.billType && formik.errors.billType}
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
              required
              value={formik.values.clientType}
              // onBlur={formik.handleBlur}
              error={formik.touched.clientType && formik.errors.clientType}
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
              helperText={formik.errors.name}
              error={formik.errors.name}
              freeSolo={true}
              name="name"
              id="combo-box-demo"
              options={users}
              sx={{
                textTransform: "capitalize",
              }}
              defaultValue={localStore.name}
              // onBlur={formik.handleBlur}
              //onChange={handleAutoChange}

              //autoCapitalize="initial"
              renderInput={(params) => (
                <TextField
                  required
                  error={formik.errors.name}
                  value={formik.values.name}
                  //onBlur={formik.handleBlur}
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
          </Grid>

          <Grid item sm={8}>
            <TextField
              // onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email}
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
              required
              /* onInput={(e) => {
                e.target.value = parseInt(
                  Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
                );
              }} */
              error={formik.touched.phone && formik.errors.phone}
              helperText={formik.errors.phone}
              value={formik.values.phone}
              name="phone"
              onChange={formik.handleChange}
              fullWidth
              label={"Teléfono"}
              type="text"
            />
          </Grid>
        </Grid>

        <Grid
          item
          sx={{
            height: 70,
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Tooltip title="Agregar productos" placement="right" arrow>
            <span>
              <NextBtn onClick={formik.handleSubmit} className={"arrow-btn"} />
            </span>
          </Tooltip>
        </Grid>
      </form>

      {!formik.isValid && (
        <Alert
          severity="error"
          /*   TransitionProps={{ timeout: 1000 }}
          TransitionComponent={Zoom} */
        >
          <AlertTitle>Error</AlertTitle>
          Los campos con asterisco (*) son obligatorios.
        </Alert>
      )}
      {/*   {!formik.isValid && (
        <Modal open={open}>
          <Error handleClose={handleClose} />
        </Modal>
      )} */}
    </Box>
  );
};

export default PersonalData;
