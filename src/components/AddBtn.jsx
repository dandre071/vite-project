import React from "react";
import { Button, Input } from "@mui/material";
/* import { useLocalStorage } from "../Hooks/useLocal.js"; */

import useLocalStorage from "../Hooks/useLocalState.jsx";

const AddBtn = () => {
  const { handleSubmitData } = useLocalStorage();

  return (
    <Button
      sx={{
        height: 50,
        fontSize: 20,

        color: "white",
        bgcolor: "primary.main",
        width: 200,
        borderRadius: 2,
      }}
      type="submit"
      variant="contained"
      disableElevation
      disableRipple
      onSubmit={handleSubmitData}

      // onClick={sum}
      // onSubmit={onSubmit}
    >
      Agregar
    </Button>
  );
};

export default AddBtn;
