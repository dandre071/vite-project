import { useForm, Controller } from "react-hook-form";
import { Box, FormControl, Grid, Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import TextField from "@mui/material/TextField";

const FormSelect = ({
  control,
  disabled,
  required,
  name,
  defaultValue,
  options,
  label,
  onChange,
}) => {
  const [value, setValue] = useState("");

  return (
    <FormControl fullWidth sx={{ my: 1 }}>
      <InputLabel id={`input-label-${name}`}>{label}</InputLabel>
      <Controller
        sx={{ display: "flex" }}
        name={name}
        control={control}
        defaultValue={options[0]}
        required={required}
        key={`select-${name}`}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Select
              onChange={onChange}
              fullWidth
              value={value}
              label={label}
              disabled={disabled}
              error={!!error}
              sx={{ color: `text.main` }}
            >
              {options.map((option, index) => (
                <MenuItem
                  name={name}
                  value={option}
                  key={index}
                  sx={{ color: `text.main` }}
                >
                  {option}
                </MenuItem>
              ))}
            </Select>
          </Box>
        )}
      />
    </FormControl>
  );
};
export default FormSelect;
