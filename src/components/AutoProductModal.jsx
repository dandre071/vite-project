import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import { BorderStyle } from "@mui/icons-material";
import TextAreas from "./TextAreas";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ModalHeader from "./ModalHeader";
import SelectField from "./SelectField";

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

const AutoProductModal = ({ text, matSize, material, choice, acabado }) => {
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
              <ModalHeader title={"Producto Auto"} />
            </Grid>

            <Grid item sm={7}>
              <SelectField
                fullWidth
                item
                options={material}
                text={"Material"}
                label={"Material"}
              />
            </Grid>

            <Grid item sm={5}>
              <SelectField
                item
                options={matSize}
                text={"Ancho del material"}
                label={"Tipo de cliente"}
              />
            </Grid>
            <Grid item sm={4}>
              <TextField fullWidth type={"text"} label={"Ancho"} />
            </Grid>

            <Grid item sm={4}>
              <TextField fullWidth type={"text"} label={"Alto"} />
            </Grid>

            <Grid item sm={4}>
              <TextField fullWidth type={"number"} label={"Cant"} />
            </Grid>

            <Grid item sm={6}>
              <SelectField
                item
                options={acabado}
                text={"Acabado"}
                label={"Tipo de cliente"}
              />
            </Grid>
            <Grid item sm={6}>
              <div
                className="price-holder"
                style={{
                  textAlign: "right",
                  fontSize: 25,
                  fontWeight: 700,
                  color: "#f10000",
                }}
              >
                $ 000000
              </div>
            </Grid>

            <Grid item sm={12}>
              <TextAreas label={"Descripción"} description={"Descripción"} />
            </Grid>
            <Grid item sm={12}>
              <Button
                sx={{ height: 50, fontSize: 20, color: "white" }}
                fullWidth
                type="submit"
                variant="contained"
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

export default AutoProductModal;
