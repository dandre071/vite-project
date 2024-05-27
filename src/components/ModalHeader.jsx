import { Typography } from "@mui/material";
import React from "react";

const header = {
  display: "flex",
  /*background: "#1304a4",*/

  height: 70,
  alignItems: "center",
  justifyContent: "center",
};

const ModalHeader = ({ title }) => {
  return (
    <>
      <div style={header}>
        <Typography
          variant="h4"
          component="h2"
          fontWeight={600}
          sx={{ color: `primary.main` }}
        >
          {title}
        </Typography>
      </div>
    </>
  );
};

export default ModalHeader;
