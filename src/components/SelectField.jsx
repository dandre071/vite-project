import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectField = ({ text, options }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 160 }}>
      <FormControl size="normal" fullWidth>
        <InputLabel id="demo-select-small-label">{text}</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={age}
          label={text}
          onChange={handleChange}
        >
          {options.map((x) => (
            <MenuItem key={x} value={x}>
              {x}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
