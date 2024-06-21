import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

const ButtonG = () => {
  return (
    <Box
      item
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        "& > *": {
          m: 1,
          width: "100%",
          flexWrap: "wrap",
          marginLeft: 0,
          marginTop: 0,
        },
      }}
    >
      <Button
        sx={{ margin: 0, fontSize: 14, lineHeight: 1.5, border: 2 }}
        variant="contained"
        disableElevation
      >
        Producto manual
      </Button>
      <Button
        sx={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}
        variant="contained"
        disableElevation
      >
        Producto automático
      </Button>

      <Button
        sx={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}
        variant="contained"
        disableElevation
      >
        Producto estándar
      </Button>
      <Button
        sx={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}
        variant="contained"
        disableElevation
      >
        Corte en vinilo
      </Button>
    </Box>
  );
};

export default ButtonG;
