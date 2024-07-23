import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormInputProps } from "./FormInputProps";
import { InputLabelProps } from "../../Styles/styles";

export const FormInputText = ({ name, control, label, errors, helperText }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },

        formState,
      }) => (
        <TextField
          error={errors}
          helperText={helperText}
          onChange={onChange}
          value={value}
          label={label}
          sx={{ p: 0, width: 100 }}
        />
      )}
    />
  );
};
