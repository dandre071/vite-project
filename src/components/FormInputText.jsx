import { useForm, Controller } from "react-hook-form";
import { Box, FormControl, Grid, Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import TextField from "@mui/material/TextField";

export const FormInputText = ({
  disabled,
  name,
  variant,
  control,
  defaultValue,
  label,
  type,
  required,
  rows,
  multiline,
  autofocus,
}) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ? defaultValue : ""}
      rules={{
        required: required,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          sx={{ my: 1 }}
          margin="dense"
          error={!!error}
          fullWidth
          label={label}
          disabled={disabled}
          type={type}
          rows={rows}
          multiline={multiline}
          autoFocus={autofocus}
          onChange={onChange}
          value={value}
          variant={variant}
        />
      )}
    />
  );
};
