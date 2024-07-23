import { useForm, Controller } from "react-hook-form";
import { Box, FormControl, Grid, Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import TextField from "@mui/material/TextField";

export const FormAutocomplete = ({
  name,
  defaultValue,
  control,
  label,
  options,
  required = true,
  autofocus = false,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      key={`autocomplete-${name}`}
      rules={{
        required: required,
      }}
      defaultValue={defaultValue}
      render={({ field: { ref, value, onChange, ...field } }) => (
        <Autocomplete
          freeSolo
          id={`autocomplete-${name}`}
          autoFocus={autofocus}
          options={options}
          onChange={(_, data) => onChange(data)}
          renderInput={(params) => (
            <TextField
              {...params}
              {...field}
              fullWidth
              variant={"standard"}
              key={`autocomplete-${name}-input`}
              inputRef={ref}
              label={label}
            />
          )}
        />
      )}
    />
  );
};
