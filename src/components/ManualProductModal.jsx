import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  FormControl,
  Input,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import ProductSearchInput from "./ProductSearchInput";
import TextAreas from "./TextAreas";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ModalHeader from "./ModalHeader";
/* import SelectField from "./SelectField"; */
import AddBtn from "./AddBtn";
import OpenModalBtn from "./OpenModalBtn";
import { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";

import FormSelect from "./FormSelect";
import { acabados } from "./lists";
import BasicSelect from "./BasicSelect.jsx";
import { FormInputText } from "./FormInputText.jsx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 470,
  /*  bgcolor: "rgba(255,255,255,0.5)", */
  bgcolor: `white`,
  p: 0,
  boxShadow: 5,
};

const Theme = createTheme({
  overrides: {
    MuiInputBase: {
      input: {
        background: "#fff",
        color: "red",
      },
    },
  },
});

const textFieldStyles = (textFieldStyles) => ({
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    color: "red",
  },
});

const ManualProductModal = ({ text, choice }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const styleParams = { radius: 20, padd: 6 };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      producto: "",
      precio: "",
      acabado: "",
      cantAcabado: "",
      cantidad: "",
      description: "",
    },
  });

  const [obj, updater] = useState({
    producto: "",
    precio: "",
    acabado: "",
    cantidad_acabado: "",
    cantidad: "",
    description: "",
  });

  const productUpdater = () => {};

  let tempItems = [];
  let dataItem;
  {
    /* const onSubmit = (data) => {
    localStorage.setItem("manual", JSON.stringify({ ...data, data }));
    tempItems = [...tempItems, data];
    localStorage.setItem("Manual-Products", JSON.stringify(data));
    dataItem = data.producto;
    console.log(dataItem);

    alert("Producto agregado correctamente");
  };
 */
  }
  const productRef = useRef("fdgfgfg");

  const [formData, setFormData] = useState({
    producto: "",
    precio: "",
    cantidad: null,
    acabado: "",
    cantAcabado: null,
    descripcion: "",
  });

  const acabado = formData.acabado;
  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  };
  const handleSubmitData = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box style={{ bg: "secondary.light", BorderColor: "black" }}>
      <OpenModalBtn text={"Producto Manual"} onClick={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box borderRadius="10px" sx={style}>
          <ModalHeader title={"Configuración Manual"} style={{ p: 0 }} />

          <Box
            borderRadius="10px"
            sx={{
              pt: 0.5,
              pr: 6,
              pl: 6,
              pb: 3,

              borderTopRightRadius: styleParams.radius,
              borderTopLeftRadius: styleParams.radius,
              bgcolor: "white",
            }}
          >
            <form
              /* onSubmit={handleSubmit(onSubmit)} */ onSubmit={
                handleSubmitData
              }
              onChange={handleChange}
              noValidate
            >
              <Grid container spacing={1.2} sx={{ flexGrow: 1 }}>
                <Grid item sm={12}></Grid>
                <h4>{dataItem}</h4>
                <Grid item sm={12}>
                  <Controller
                    name="producto"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        value={formData.name}
                        ref={productRef}
                        fullWidth
                        label={"Producto"}
                        type="text"
                        InputProps={{
                          style: {
                            color: "red",
                            /* background: "blue", */
                          },
                        }}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item sm={8}>
                  <Controller
                    name="precio"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label={"Precio"}
                        type="number"
                        {...field}
                      />
                    )}
                  />
                </Grid>

                <Grid item sm={4}>
                  <Controller
                    name="cantidad"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label={"Cantidad"}
                        type="number"
                        {...field}
                        defaultValue={1}
                        style={textFieldStyles.input}
                      />
                    )}
                  />
                </Grid>
                <Grid item sm={12}>
                  <FormSelect
                    name="acabado"
                    defaultValue={"Sin acabado"}
                    options={acabados}
                    label={"Acabado"}
                    control={control}
                    value={formData.acabado}
                  />
                  {formData.acabado === "Ojales" && (
                    <Controller
                      name="cantAcabado"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          sx={{
                            width: "100",
                            bgcolor: "secondary.light",
                          }}
                          fullWidth
                          type={"number"}
                          label={"Cant"}
                          defaultValue={1}
                          variant={"outlined"}
                          value={formData.cantAcabado}
                        />
                      )}
                    />
                  )}
                </Grid>

                <Grid item sm={12}>
                  <FormInputText
                    disabled={false}
                    name={"description"}
                    variant={"outlined"}
                    control={control}
                    defaultValue={""}
                    label={"Descripción del trabajo"}
                    type="text"
                    required={false}
                    multiline={true}
                    autofocus={false}
                  />
                </Grid>

                <Grid item sm={12}>
                  <AddBtn fullWidth />
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ManualProductModal;
