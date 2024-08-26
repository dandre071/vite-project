import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function DatePicker() {
  const [value, setValue] = useState(dayjs("2022-04-17T15:30"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
        <DateTimePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          timezone="America/Bogota"
          label={"Fecha Entrega"}
          name={"delivery"}
          format="DD/MM/YYYY, h:mma"
          sx={{
            textField: {},
            input: {
              size: "small",
              color: "text.main",
              width: "95%",
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
}
