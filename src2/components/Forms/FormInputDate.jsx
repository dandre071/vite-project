import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

export const FormInputDate = ({
  name,
  label,
  required = false,
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {" "}
      {/* Use the appropriate adapter */}
      <DemoContainer components={["DateTimePicker"]} sx={{}}>
        <DateTimePicker
          label={label}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          sx={{
            display: "grid",
            gridTemplateColumns: "225px 0",
            textField: { size: "small", color: "primary" },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
