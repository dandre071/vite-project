import { Padding } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { themeColors } from "./utils/configs";
const header = {
  display: "grid",
  height: 100,

  justifyContent: "center",

  alignItems: "end",
};

const ModalHeader = ({ title }) => {
  return (
    <>
      <Box
        style={header}
        sx={{
          justifyContent: "center",
          bgcolor: themeColors.neutralLight,
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          fontWeight={500}
          fontSize={"1.5em"}
          sx={{ color: themeColors.mainPrimary, pb: 1.5 }}
        >
          {title}
        </Typography>
      </Box>
      {/*  <Divider sx={{ borderColor: "secondary.light", borderWidth: 1 }} /> */}
    </>
  );
};

export default ModalHeader;
