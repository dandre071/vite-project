import { Divider, Typography } from "@mui/material";
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
      <div style={header}>
        <Typography
          variant="h5"
          component="h2"
          fontWeight={600}
          sx={{ color: `secondary.main` }}
        >
          {title}
        </Typography>
      </div>
    </>
  );
};

export default ModalHeader;
