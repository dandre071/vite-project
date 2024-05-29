import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const DatePickerComp = ({ label }) => {
  const [value, setValue] = React.useState(dayjs("2024-01-01T00:00"));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        {/*<DateTimePicker
          label="Uncontrolled picker"
          defaultValue={dayjs('2022-04-17T15:30')}
        />*/}
        <DateTimePicker
          slotProps={{ textField: { size: "normal" } }}
          label={label}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          sx={{ height: 60, fontSize: 10, p: 0 }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DatePickerComp;
