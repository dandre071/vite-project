import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FormControl, Input, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import ProductSearchInput from "./ProductSearchInput";
import TextAreas from "./TextAreas";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ModalHeader from "./ModalHeader";
/* import SelectField from "./SelectField"; */
import AddBtn from "./AddBtn";
import OpenModalBtn from "./OpenModalBtn";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormSelect from "./FormSelect";
import { acabados } from "./lists";
import BasicSelect from "./BasicSelect.jsx";
import { FormInputText } from "./FormInputText.jsx";
import { productTemp } from "./utils/temp.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  /*  bgcolor: "rgba(255,255,255,0.5)", */
  bgcolor: "white",
  border: "0px transparent #000 5px",

  boxShadow: 24,
  p: 4,
};

const ManualProductModal = ({ text, choice }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      producto: "",
      precio: "",
      acabado: "",
      cantidad_acabado: "",
      cantidad: "",
      description: "",
    },
  });
  /*   const [data, setData] = useState([]);

  useEffect(() => {
    localStorage.setItem("dataKey", JSON.stringify(data));
  }, [data]); */
  let tempItems = [];

  /*   const onSubmit = (data) => {
    localStorage.setItem("manual", JSON.stringify({ ...data, data }));
    console.log(data);
  };
 */
  const onSubmit = (data) => {
    /* localStorage.setItem("manual", JSON.stringify({ ...data, data })); */
    tempItems = [...tempItems, data];
    localStorage.setItem("Manual-Products", JSON.stringify(data));
    console.log(tempItems);
  };

  return (
    <Box>
      <OpenModalBtn text={"Producto Manual"} onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box borderRadius="10px" sx={style}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid item sm={12}>
                <ModalHeader title={"Configuración Manual"} />
              </Grid>

              <Grid item sm={12}>
                <Controller
                  name="producto"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      label={"Producto"}
                      type="text"
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
                    />
                  )}
                />
              </Grid>
              <Grid item sm={12}>
                <FormSelect
                  name={"acabado"}
                  defaultValue={"Sin acabado"}
                  options={acabados}
                  label={"Acabado"}
                  control={control}
                />
              </Grid>

              {/* <Grid item sm={12}>
                <FormSelect
                  name={"acabado"}
                  control={control}
                  defaultValue={acabados[0]}
                  required={true}
                  options={acabados}
                  label={"Acabado"}
                  updateValue={updateValue}
                />
              </Grid> */}
              {/*   <Grid item sm={12}>
                <Controller
                  name="acabado"
                  control={control}
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <InputLabel
                        variant="outlined"
                        htmlFor="uncontrolled-native"
                      >
                        Acabado
                      </InputLabel>
                      <Select
                        native={false}
                        fullWidth
                        label="Acabado"
                        text="Acabado"
                        name="acabado"
                        defaultValue={"Sin acabado"}
                        value={option}
                        onChange={handleOptChange}
                      >
                        {acabado.map((x) => (
                          <MenuItem key={x} value={x}>
                            {x}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                /> */}

              {/* <FormControl fullWidth>
                  <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                    Acabado
                  </InputLabel>
                  <Select
                    fullWidth
                    label="Acabado"
                    text="Acabado"
                    defaultValue={"Sin acabado"}
                    onChange={(e) => console.log(e.target.value)}
                  >
                    {acabado.map((x) => (
                      <MenuItem key={x} value={x}>
                        {x}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid> */}

              {/*  <Grid item sm={12}>
                <Controller
                  name="select"
                  control={control}
                  render={({ field }) => (
                    <>
                      <InputLabel id="demo-simple-select-label">
                        Acabado
                      </InputLabel>
                      <Select {...field} fullWidth label={"Acabado"}>
                        {" "}
                        {acabados.map((x) => (
                          <MenuItem key={x}>{x}</MenuItem>
                        ))}
                      </Select>
                    </>
                  )}
                />
              </Grid>
              <Grid item sm={12}>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <TextAreas
                      name="description"
                      fullWidth
                      label={"Descripción"}
                      type="text"
                      {...field}
                      text={"Descripción"}
                    />
                  )}
                />
              </Grid> */}
              <Grid item sm={12}>
                <FormInputText
                  disabled={false}
                  name={"description"}
                  variant="outlined"
                  control={control}
                  defaultValue={""}
                  label={"Descripción del trabajo"}
                  type="text"
                  required={false}
                  rows={4}
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
      </Modal>
    </Box>
  );
};

export default ManualProductModal;
