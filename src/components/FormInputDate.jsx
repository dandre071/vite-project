import { useForm, Controller } from "react-hook-form";
import { Box, FormControl, Grid, Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import TextField from "@mui/material/TextField";

export const FormInputDate = ({
  name,
  control,
  label,
  required = false,
  defaultValue,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ required }}
      render={({ field: { onChange, value } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {" "}
          {/* Use the appropriate adapter */}
          <DateField
            label={label}
            value={value || null}
            onChange={onChange}
            fullWidth
          />
        </LocalizationProvider>
      )}
    />
  );
};
