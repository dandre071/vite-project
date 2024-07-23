import { Box, FormControl, Grid, Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { fieldStyle, textStyles } from "../utils/configs";

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
}) => {
  return (
    <FormControl fullWidth sx={{ my: 1 }}>
      <InputLabel id={`input-label-${name}`}>{label}</InputLabel>

      <Box sx={{ display: "flex" }}>
        <Select
          defaultValue={"Sin acabado"}
          name={name}
          onChange={onChange}
          fullWidth
          value={value}
          label={label}
          disabled={disabled}
          sx={{
            ...fieldStyle,
            padding: 0.2,
            borderRadius: 2,
            margin: 0,
          }}
          style={{ ...style, borderStyle: "none" }}
        >
          {options.map((option, index) => (
            <MenuItem value={option} key={index} sx={{ style }}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </FormControl>
  );
};
export default FormSelect2;
