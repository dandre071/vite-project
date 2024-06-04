import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const TextAreas = ({ label, description, name }) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, marginLeft: 0 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        name={name}
        fullWidth
        id="outlined-multiline-static"
        label={label}
        multiline
        rows={4}
        defaultValue=""
      />
    </Box>
  );
};

export default TextAreas;
