import {
  Alert,
  AlertTitle,
  Autocomplete,
  Box,
  Fade,
  Grid,
  Modal,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FormSelect2 from "../Forms/FormSelect2";
import { useFormik } from "formik";
import { options } from "../utils/options";
import { PersonSchema } from "../Validations";
import { usePersonalData } from "../../store/shoppingCart";
import { fakeUsers } from "../utils/test";
import { useNavigate } from "react-router-dom";
import NextBtn from "../Buttons/NextBtn";

const PersonalData = () => {
  //HOOKS

  ///////////
  const localStore = usePersonalData((state) => state.personalData);
  const addData = usePersonalData((state) => state.addData);
  const users = fakeUsers.map((user) => user.name);
  const navigate = useNavigate();
  let isValid = true;
  console.log(isValid);
  const handleSubmit = () => {
    !formik.isValid
      ? () => {
          isValid = false;
          formik.setErrors({
            billType: formik.errors.billType,
            clientType: formik.errors.clientType,
            name: formik.errors.name,
            email: formik.errors.email,
            phone: formik.errors.phone,
          });
        }
      : formik.setErrors({
          billType: "",
          clientType: "",
          name: "",
          email: "",
          phone: "",
        });
    addData(formik.values);

    navigate("/product-module");
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
    validationSchema: PersonSchema,
    onSubmit: handleSubmit,

    validateOnChange: false,
    validateOnBlur: false,
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

  const handleAutoChange = (event, value) => {
    formik.values.name = value;
    const found = users.filter((user) => user == formik.values.name);
    console.log(found);
  };

  const validate = () => formik.isValid;
  const [show, setShow] = useState(formik.isValid);
  console.log(show);

  const handleShow = () => setShow(true);
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

  return (
    <Box>
      <form style={{ alignSelf: "center" }}>
        <Grid container flexGrow={1} spacing={1.5}>
          <Grid item sm={8}>
            <FormSelect2
              required
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
              renderInput={(params) => (
                <TextField
                  required
                  error={formik.errors.name}
                  value={formik.values.name}
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
              error={formik.touched.email && formik.errors.email}
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
              required
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
            mt: 3,
            pt: 3,
            height: 70,
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Tooltip
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "secondary.main",
                  "& .MuiTooltip-arrow": {
                    color: "secondary.main",
                  },
                },
              },
            }}
            title="Agregar productos"
            placement="bottom"
            arrow
          >
            <span>
              <NextBtn
                style={{ color: "primary.main" }}
                onClick={formik.handleSubmit}
                className={"arrow-btn"}
              />
            </span>
          </Tooltip>
        </Grid>
      </form>

      {/* <Fade
        in={!formik.isValid} //Write the needed condition here to make it appear
        timeout={{ enter: 500, exit: 500 }} //Edit these two values to change the duration of transition when the element is getting appeared and disappeard
        addEndListener={() => {
          setTimeout(() => {
            setShow(false);
          }, 1000);
        }}
      > */}
      {show && (
        <Alert
          onClose={() => {
            setShow(false);
          }}
          className="alert"
          severity="error"
          /*   TransitionProps={{ timeout: 1000 }}
          TransitionComponent={Zoom} */
        >
          <AlertTitle>Error</AlertTitle>
          Los campos con asterisco (*) son obligatorios.
        </Alert>
      )}
      {/*    </Fade> */}
    </Box>
  );
};

export default PersonalData;
