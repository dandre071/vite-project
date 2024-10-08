import { Box, FormControl, Grid, Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const FormSelect2 = ({
  control,

  disabled,
  required,
  name,
  defaultValue,
  onBlur,
  options,
  label,
  onChange,
  value,
  theme,
  style,
  error,
  helperText,
  multiple,
  renderValue,
  variant,
  size,
}) => {
  //console.log(options);
  return (
    <FormControl required={required} onBlur={onBlur} fullWidth sx={{}}>
      <InputLabel id={`input-label-${name}`}>{label}</InputLabel>

      <Box sx={{ display: "flex" }}>
        <Select
          sx={{ p: 0 }}
          helperText={helperText}
          onBlur={onBlur}
          size={size}
          multiple={multiple}
          defaultValue={options[0]}
          name={name}
          onChange={onChange}
          fullWidth
          value={value}
          label={label}
          disabled={disabled}
          options={options}
          nothingFoundMessage="No encontrado..."
          inputProps={
            ((variant = { variant }),
            ((error = { error }), (helperText = { helperText })))
          }
        >
          {options.map((option, index) => (
            <MenuItem value={option} key={index}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </FormControl>
  );
};
export default FormSelect2;
