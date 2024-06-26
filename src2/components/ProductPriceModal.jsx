import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import ProductSearchInput from "./ProductSearchInput";
import { BorderStyle } from "@mui/icons-material";
import TextAreas from "./TextAreas";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ModalHeader from "./ModalHeader";
import AddBtn from "./AddBtn";
import OpenModalBtn from "./OpenModalBtn";
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

const ProductPriceModal = ({ text }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <OpenModalBtn
        fullWidth
        text={"Producto dsdsdsdsds"}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box borderRadius="10px" sx={style}>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid item sm={12}>
              <ModalHeader title={"Producto"} item />
            </Grid>
            <Grid item sm={12}>
              <ProductSearchInput fullWidth item />
            </Grid>
            <Grid item sm={12}>
              <TextAreas label={"Descripción"} description={"Descripción"} />
            </Grid>
            <Grid item sm={12}>
              <AddBtn />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductPriceModal;
