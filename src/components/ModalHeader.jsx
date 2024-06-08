import { Padding } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const header = {
  display: "grid",
  height: 100,

  justifyContent: "start",

  alignItems: "end",
};

const ModalHeader = ({ title }) => {
  return (
    <>
      <Box
        style={header}
        sx={{
          borderTopRightRadius: 7,
          borderTopLeftRadius: 7,
          pb: 2,
          width: "100%",
          /*  bgcolor: "#0057D6", */
          bgcolor: "white",
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          fontWeight={500}
          fontSize={"1.5em"}
          sx={{ color: "dark", pl: 6 }}
        >
          {title}
        </Typography>
      </Box>
      <Divider sx={{ borderColor: "secondary.light", borderWidth: 1 }} />
    </>
  );
};

export default ModalHeader;
