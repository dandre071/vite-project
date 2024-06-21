import React from "react";
import { Button } from "@mui/material";
const OpenModalBtn = ({ onClick, text }) => {
  return (
    <Button
      color="info"
      variant="contained"
      onClick={onClick}
      fullWidth
      sx={{
        fontSize: 13,
        fontWeight: 900,
        lineHeight: 1.5,
        height: 55,
      }}
    >
      {text}
    </Button>
  );
};

export default OpenModalBtn;
