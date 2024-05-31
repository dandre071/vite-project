import React from "react";
import { Button } from "@mui/material";

import Alert from "@mui/material/Alert";

const handleSubmit = () => {
  <Alert severity="success">This is a success Alert.</Alert>;
  alert("This is a success Alert.");
};

const AddBtn = ({ onClick }) => {
  return (
    <Button
      sx={{
        height: 50,
        fontSize: 20,
        color: "primary.main",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "primary",
        bgcolor: "white",
        scale: 1,
        "&:hover": {
          bgcolor: "primary",
          color: "white",
          transform: { scale: 0.5 },
        },
      }}
      color="primary"
      fullWidth
      type="submit"
      variant="contained"
      disableElevation
      onClick={onClick}
    >
      Agregar
    </Button>
  );
};

export default AddBtn;
