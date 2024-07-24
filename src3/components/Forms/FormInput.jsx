import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";

const FormInput = ({ name, label }) => {
  const { register, handleSubmit, reset, control, setValue } = useForm();
  const { control } = useFormContext();
  const error = {
    message: "Este campo es requerido.",
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          required
          helperText={error ? error.message : null}
          size="normal"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};

export default FormInput;
