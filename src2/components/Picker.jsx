import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Box } from "@mui/material";
import dayjs from "dayjs";

const Picker = () => {
  //const [value, setValue] = React.useState(dayjs("2022-04-17T15:30"));
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="Small picker"
            slotProps={{ textField: { size: "small", color: "primary" } }}
          />
        </DemoContainer>
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["TimePicker", "TimePicker"]}>
          <TimePicker
            defaultValue={null}
            format="hh:mm a"
            size="small"
            label="Controlled picker"
            //value={value}
            //onChange={(newValue) => setValue(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
};

export default Picker;
