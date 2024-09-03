import { Box, FormControl, Grid, Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider } from "styled-components";
import { fieldStyle, textStyles } from "../utils/configs";
import { InputLabelProps } from "../../Styles/styles";
import { customTheme } from "../../Hooks/useCustomTheme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
    <FormControl onBlur={onBlur} fullWidth sx={{ my: 1 }}>
      <InputLabel
        /* sx={{
          color: "primary.main",
          fontSize: 20,
          fontWeight: 500,
          pl: 1,
          pr: 1,
        }}*/
        id={`input-label-${name}`}
      >
        {label}
      </InputLabel>

      <Box sx={{ display: "flex" }}>
        <Select
          error={error}
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
          nothingFoundMessage="No State Found..."
          inputProps={((variant = { variant }), (helperText = { helperText }))}
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
