import { Stack, Typography } from "@mui/material";
import React from "react";
import { customTheme } from "../Hooks/useCustomTheme";
import { colPesos } from "./utils/configs";

const center = { justifySelf: "center", alignSelf: "center" };

const formatNumber = (num) => {
  const formmated = colPesos.format(num);
  return formmated;
};

/* const formatPhoneNumber = () => {
  const phone = 3206598822;
  const reg = //
  console.log(phone.toString().slice(0, 3));
};
formatPhoneNumber(); */

const InvoiceListItem = () => {
  return (
    <Stack
      sx={{
        height: 80,
        bgcolor: "white",
        display: "grid",
        gridTemplateRows: "35px 45px",
        width: 490,
      }}
    >
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: "300px 40px 70px 90px",
          bgcolor: "yellow",
          height: 35,
        }}
      >
        <Typography sx={{ fontSize: 14, alignSelf: "center" }}>
          ddfdfddfddf ddfdfdf dfdfdfdf
        </Typography>
        <Typography
          sx={{ fontSize: 14, justifySelf: "center", alignSelf: "center" }}
        >
          100
        </Typography>
        <Typography
          sx={{ fontSize: 14, justifySelf: "end", alignSelf: "center" }}
        >
          12344546
        </Typography>
        <Typography
          sx={{ fontSize: 14, justifySelf: "end", alignSelf: "center" }}
        >
          {formatNumber(1223446)}
        </Typography>
      </Stack>
      <Stack
        sx={{
          bgcolor: "blue",
          display: "grid",
          gridTemplateColumns: "400px 100px",
          height: "1fr",
        }}
      >
        <Typography sx={{ fontSize: 14 }}>
          dsdsds sdsd dsdjs sdkjsdjsd sdjsjds d
        </Typography>
        <Typography sx={{ fontSize: 14 }}>Acabado:</Typography>
      </Stack>
    </Stack>
  );
};

export default InvoiceListItem;
