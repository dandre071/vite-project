import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Height } from "@mui/icons-material";
import { Box } from "@mui/material";

const DatePickerComp = ({ label }) => {
  const [value, setValue] = React.useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <DemoContainer components={["DateTimePicker"]}>
          {/*<DateTimePicker
          label="Uncontrolled picker"
          defaultValue={dayjs('2022-04-17T15:30')}
        />*/}
          <DateTimePicker
            label={label}
            value={value}
            onChange={(newValue) => setValue(newValue)}
            sx={{
              display: "grid",
              gridTemplateColumns: "230px",
            }}
          />
        </DemoContainer>
      </Box>
    </LocalizationProvider>
  );
};

export default DatePickerComp;
