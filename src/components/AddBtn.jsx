import React from "react";
import { Button, Input } from "@mui/material";
import { sum } from "./logic";
import Alert from "@mui/material/Alert";

const AddBtn = () => {
  return (
    <Button
      sx={{
        height: 50,
        fontSize: 20,

        /* bgcolor: "primary.main", */
        bgcolor: "primary.main",
      }}
      fullWidth
      type="submit"
      variant="contained"
      disableElevation
      // onClick={sum}
      // onSubmit={onSubmit}
    >
      Agregar
    </Button>
  );
};

export default AddBtn;
