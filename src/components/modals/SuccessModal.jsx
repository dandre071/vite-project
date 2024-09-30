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
import { Link, redirect } from "react-router-dom";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

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

const SuccessModal = ({ onClick }) => {
  return (
    <Box className="status-modal">
      <Box className="status-modal-box">
        <CheckCircleRoundedIcon
          className="status-modal-icon"
          sx={{ fontSize: 150 }}
        />
      </Box>
      <Box className="status-modal-box">
        <Typography
          sx={{ fontSize: 40, fontWeight: 800 }}
          className="status-modal-title"
        >
          Operación exitosa!
        </Typography>
        <Typography
          sx={{ fontSize: 16, fontWeight: 400, textAlign: "center" }}
          className="status-modal-title"
        >
          Todo salió bien y la información se agregó con normalidad.
        </Typography>
      </Box>
      <Link>
        <Button
          variant="outlined"
          sx={{
            color: "greenyellow",
            border: `2px solid greenyellow`,
            textTransform: "capitalize",
            borderRadius: 2,
            height: 50,
            width: 200,
            fontSize: 20,
            transform: "scale(1)",
            "&:hover": {
              border: `2px solid greenyellow`,
              bgcolor: `greenyellow`,
              color: "white",
              transform: "scale(1.05)",
            },
          }}
          onClick={onClick}
        >
          Finalizar
        </Button>
      </Link>
    </Box>
  );
};

export default SuccessModal;
