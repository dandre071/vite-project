import * as React from "react";
import Box from "@mui/material/Box";

import { Button, ListItem, TextField, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ModalHeader from "../ModalHeader.jsx";

import AddBtn from "../Buttons/AddBtn.jsx";
import OpenModalBtn from "../OpenModalBtn.jsx";
import { useState } from "react";

import { useLocalStorage } from "../../Hooks/hooks.js";
import { usePersonalData, useShoppingCart } from "../../store/shoppingCart.js";
import { usePaymentData } from "../../store/paymentData.js";
import { redirect } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SuccessModal = ({ text, onClick, handlePrint }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    close();
    // setOpen(false);
  };

  const paymentData = usePaymentData((state) => state.clearData);
  const clientData = usePersonalData((state) => state.clearData);
  const cart = useShoppingCart((state) => state.clearCart);

  const clear = () => {
    paymentData();
    clientData();
    cart();
    // handleClose();
    //redirect("/");
  };
  const handleClick = () => {
    onClick();
    setOpen(true);
  };
  return (
    <div>
      <Button onClick={onClick}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button onClick={clear}>clear</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default SuccessModal;
