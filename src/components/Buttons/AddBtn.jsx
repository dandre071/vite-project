import React from "react";
import { Box, Button, Divider, Input } from "@mui/material";
/* import useLocalStorage from "../Hooks/useLocalState"; */

const AddBtn = ({ onSubmit, onClick }) => {
  /* const { submitForm } = useLocalStorage(); */

  return (
    <Box>
      <Divider />
      <Button
        sx={{
          height: 50,
          fontSize: 20,
          textTransform: " initial",
          color: "white",
          bgcolor: "primary.main",
          width: 200,
          borderRadius: 2,
        }}
        type="submit"
        variant="contained"
        disableElevation
        disableRipple
        // onClick={submitForm}

        /*     onClick={onClick} */
        onSubmit={onSubmit}
      >
        Agregar
      </Button>
    </Box>
  );
};

export default AddBtn;
