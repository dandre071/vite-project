import React from "react";
import { Button } from "@mui/material";
const AddBtn = () => {
  return (
    <Button
      sx={{ height: 50, fontSize: 20, color: "white" }}
      fullWidth
      type="submit"
      variant="contained"
      disableElevation
    >
      Agregar
    </Button>
  );
};

export default AddBtn;
