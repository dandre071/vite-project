import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { customTheme } from "../../Hooks/useCustomTheme";
import { ModalCardStyle } from "../../Styles/styles";
const ModalCard = ({
  children,
  title,
  onClick,
  icon,
  disableBackdropClick,
}) => {
  return (
    <Box className="modal-card" onClick={onClick}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "red",
        }}
      >
        {icon}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          /* backgroundColor: customTheme.palette.primary.main, */
          /* borderTopLeftRadius: 30,
          borderTopRightRadius: 30, */
        }}
      >
        <Typography
          className="modal-title"
          variant="h6"
          style={{
            width: "70%",
            fontSize: 24,
            fontWeight: 600,
            /* color: "white", */
            lineHeight: 1,
            textAlign: "center",
            lineBreak: "loose",
            /*  color: customTheme.palette.primary.main, */
            color: "black",
          }}
        >
          {title}
        </Typography>
      </div>
    </Box>
  );
};

export default ModalCard;
