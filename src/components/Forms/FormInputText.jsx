import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormInputProps } from "./FormInputProps";
import { InputLabelProps } from "../../Styles/styles";

export const FormInputText = ({ name, control, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          //size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          //fullWidth
          label={label}
          //variant="outlined"
          // sx={{ color: "red" }}
          // InputLabelProps={InputLabelProps}
          // InputProps={InputLabelProps}
        />
      )}
    />
  );
};
