import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";
import { useState } from "react";

const SelectField = ({ text, options, option, setOption, onChange }) => {
  /* console.log(option); */

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <FormControl size="normal" fullWidth sx={{ justifyContent: "end" }}>
        <InputLabel id="demo-select-small-label">{text}</InputLabel>
        <Select
          slotProps={{ textField: { size: "normal" } }}
          sx={{
            color: `primary.main`,

            p: 0,
            m: 0,
          }}
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={option}
          label={text}
          size="normal"
        >
          {options.map((x) => (
            <MenuItem key={x} value={x}>
              {x}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {(option == "Ojales" || option == "Bolsillos") && (
        <TextField
          sx={{ width: "40%" }}
          fullWidth
          value={option}
          type={"number"}
          label={"Cant"}
          onChange={onChange}
        />
      )}
    </Box>
  );
};

export default SelectField;
