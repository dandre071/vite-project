import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField, DateTimePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useState } from "react";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Bogota");

const TIMEZONES = ["default", "system", "UTC", "America/Bogota"];

export const FormInputDate = ({
  name,
  label,

  defaultValue,
  value,
  onChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* Use the appropriate adapter */}
      <DemoContainer components={["DateTimePicker"]} sx={{}}>
        <DateTimePicker
          timezone="America/Bogota"
          label={label}
          name={name}
          value={dayjs(value)}
          //onChange={}
          format="DD/MM/YYYY, h:mma"
          sx={{
            textField: {},
            input: {
              size: "small",
              color: "text.main",
              width: "70%",
              pr: 0,
              m: 0,
              textAlign: "right",
            },
            button: { color: "primary.main", p: 1, m: 0 },
            div: {
              // bgcolor: "red",

              pl: 1,
              m: 0,
            },
            svg: { transform: "scale(0.8)" },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
