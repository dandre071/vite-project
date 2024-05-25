import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import ProductSearchInput from "./ProductSearchInput";
import { BorderStyle } from "@mui/icons-material";
import TextAreas from "./TextAreas";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import SelectField from "./SelectField";

const options = ["Si", "No"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "0px transparent #000 5px",

  boxShadow: 24,
  p: 4,
};

const ManualProductModal = ({ text }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>{text}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box borderRadius="10px" sx={style}>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid item sm={12}>
              <TextField fullWidth label={"Producto"} />
            </Grid>
            <Grid item sm={4}>
              <TextField fullWidth type={"number"} label={"Cant"} />
            </Grid>
            <Grid item sm={8}>
              <TextField fullWidth type={"text"} label={"Precio"} />
            </Grid>
            <Grid item sm={6}>
              <SelectField
                item
                options={options}
                text={"Acabado"}
                label={"Tipo de cliente"}
              />
            </Grid>
            <Grid item sm={6}>
              <SelectField
                item
                options={options}
                text={"Laminado"}
                label={"Tipo de cliente"}
              />
            </Grid>
            <Grid item sm={12}>
              <TextAreas label={"Descripción"} description={"Descripción"} />
            </Grid>
            <Grid item sm={12}>
              <Button
                sx={{ height: 50, fontSize: 20 }}
                fullWidth
                type="submit"
                variant="contained"
                color="success"
                disableElevation
              >
                Agregar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default ManualProductModal;
