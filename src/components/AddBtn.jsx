import React from "react";
import { Button } from "@mui/material";
import { sum } from "./logic";
import Alert from "@mui/material/Alert";

const AddBtn = () => {
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
      onClick={sum}
    >
      Agregar
    </Button>
  );
};

export default AddBtn;
