import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Text = ({ label, type, value, onChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        fullWidth
        id="outlined-basic"
        label={label}
        variant="outlined"
        type={type}
        sx={{ height: 50, padding: 0, fontSize: 10 }}
        size="normal"
        value={value}
        onChange={onChange}
      />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />*/}
    </Box>
  );
};

export default Text;
