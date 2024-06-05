import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const header = {
  display: "grid",
  alignItems: "end",
  /*background: "#1304a4",*/

  height: 70,

  justifyContent: "center",
};

const ModalHeader = ({ title }) => {
  return (
    <>
      <Box style={header}>
        <Typography
          variant="h5"
          component="h2"
          fontWeight={500}
          sx={{ color: `primary.main` }}
        >
          {title}
        </Typography>
      </Box>
      <Divider />
    </>
  );
};

export default ModalHeader;
