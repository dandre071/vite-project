import { useForm, Controller } from "react-hook-form";
import { Box, FormControl, Grid, Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import TextField from "@mui/material/TextField";

const FormSelect = ({
  control,
  disabled = false,
  required = false,
  name,
  defaultValue,
  options,
  label,
}) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <FormControl fullWidth sx={{ my: 1 }}>
      <InputLabel id={`input-label-${name}`}>{label}</InputLabel>
      <Controller
        sx={{ display: "flex" }}
        name={name}
        control={control}
        defaultValue={defaultValue || ""}
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
            >
              {options.map((option, index) => (
                <MenuItem value={option} key={index}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            {(value == "Ojales" || value == "Bolsillos") && (
              <Controller
                name="cantidad-acabado"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={{ width: "30%" }}
                    fullWidth
                    type={"number"}
                    label={"Cant"}
                    defaultValue={1}
                  />
                )}
              />
            )}
          </Box>
        )}
      />
    </FormControl>
  );
};
export default FormSelect;
