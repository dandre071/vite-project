import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Text = ({ label, type }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        fullWidth
        id="outlined-basic"
        label={label}
        variant="outlined"
        type={type}
        size="normal"
      />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />*/}
    </Box>
  );
};

export default Text;
