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
}) => {
  return (
    <FormControl fullWidth sx={{ my: 1 }} onChange={onChange}>
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
          multiple={multiple}
          defaultValue={"Sin acabado"}
          name={name}
          onChange={onChange}
          fullWidth
          value={value}
          label={label}
          disabled={disabled}
          // IconComponent={<KeyboardArrowDownIcon />}
          // renderValue={renderValue}
          // style={{ ...style, borderStyle: "none" }}
          // InputLabelProps={InputLabelProps}
        >
          {options.map((option, index) => (
            <MenuItem error={error} value={option} key={index}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </FormControl>
  );
};
export default FormSelect2;
