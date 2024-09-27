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
    <Box id="modal-box" onClick={onClick}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          className="modal-title"
          variant="h6"
          style={{
            width: "70%",
            fontSize: 20,
            fontWeight: 500,
            /* color: "white", */
            lineHeight: 1,
            textAlign: "center",
            lineBreak: "loose",
          }}
        >
          {title}
        </Typography>
      </div>
    </Box>
  );
};

export default ModalCard;
