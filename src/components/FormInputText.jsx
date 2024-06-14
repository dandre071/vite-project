import { useForm, Controller } from "react-hook-form";
import { Box, FormControl, Grid, Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { inputPropsConf, textStyles } from "./utils/configs";

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
  onChange,
  value,
}) => {
  /*  const onChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  }; */
  return (
    <TextField
      sx={textStyles}
      InputProps={{
        style: inputPropsConf,
      }}
      margin="normal"
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
      name={name}
    />
  );
};
