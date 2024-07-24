import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { customTheme } from "../../Hooks/useCustomTheme";
import { ModalCardStyle } from "../../Styles/styles";

const ModalCard = ({ children, title, onClick }) => {
  return (
    <Box sx={{}}>
      {/*  <Box
        sx={{
          width: 40,
          height: 40,
          bgcolor: "red",
          position: "relative",
          top: 55,
          left: -20,
          borderRadius: "50%",
        }}
      ></Box> */}
      <Stack onClick={onClick} sx={ModalCardStyle}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 1000,
            color: "primary.light",
            lineHeight: 1,
            textAlign: "center",
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
