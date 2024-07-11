import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { customTheme } from "../../Hooks/useCustomTheme";
import { ModalCardStyle } from "../../Styles/styles";

const ModalCard = ({ children, title, onClick }) => {
  return (
    <Stack onClick={onClick} spacing={2} sx={ModalCardStyle}>
      <Box
        sx={{
          width: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: `2px solid ${customTheme.palette.background.dark}`,
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 1000,
            textAlign: "center",
            p: 0,
            lineHeight: 1,
            alignSelf: "center",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Stack>
  );
};

export default ModalCard;
