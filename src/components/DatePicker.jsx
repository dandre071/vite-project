import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const DatePickerComp = ({ label }) => {
  const [value, setValue] = React.useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DateTimePicker"]}
        sx={{ background: "red", width: 230, scrollbarWidth: 0 }}
      >
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

export default DatePickerComp;
