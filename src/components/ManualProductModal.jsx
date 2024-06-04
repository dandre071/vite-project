import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FormControl, Input, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import ProductSearchInput from "./ProductSearchInput";

import TextAreas from "./TextAreas";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ModalHeader from "./ModalHeader";
import SelectField from "./SelectField";
import AddBtn from "./AddBtn";
import OpenModalBtn from "./OpenModalBtn";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0px transparent #000 5px",

  boxShadow: 24,
  p: 4,
};

const ManualProductModal = ({ text, choice, acabado }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [option, setOption] = useState("");

  const { control, handleSubmit } = useForm({
    defaultValues: {
      producto: "",
      precio: "",
      acabado: "",
      cantidad: "",
      description: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  const handleOptChange = (event) => {
    setOption(event.target.value);
    console.log(option);
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
                <Controller
                  name="acabado"
                  control={control}
                  render={({ field }) => (
                    <SelectField
                      onChange={handleOptChange}
                      setOption={setOption}
                      {...field}
                      fullWidth
                      label={"Acabado"}
                      value={option}
                      type="text"
                      options={acabado}
                      option={option}
                    />
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
