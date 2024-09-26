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
      <Box
        className="child"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {icon}
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& :hover": { backgroundColor: customTheme.palette.primary.main },
          /*    borderTopLeftRadius: 10,
          borderTopRightRadius: 10, */
        }}
      >
        <Typography
          className="child"
          variant="h6"
          sx={{
            fontSize: 20,
            fontWeight: 500,
            color: "white",
            lineHeight: 1,
            textAlign: "center",
          }}
          style={{ cursor: "pointer" }}
        >
          {title}
        </Typography>
      </div>
    </Box>
  );
};

export default ModalCard;
