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
    <Box id="modal-box">
      <Stack onClick={onClick} sx={ModalCardStyle}>
        <Box
          className="child"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            borderRight: `2px solid ${customTheme.palette.primary.light}`,
          }}
        >
          {icon}
        </Box>
        <Typography
          className="child"
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "text.main",
            lineHeight: 1,
            textAlign: "left",
            ml: 3,
          }}
          style={{ cursor: "pointer" }}
        >
          {title}
        </Typography>
      </Stack>
    </Box>
  );
};

export default ModalCard;
