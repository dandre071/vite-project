import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { invoiceGrid } from "../../Styles/styles";

const InvoiceItem = () => {
  return (
    <Stack className="invoice-item" sx={{}}>
      <Stack
        sx={{
          bgcolor: "#f7f7f7",
          display: "grid",
          gridTemplateColumns: invoiceGrid,
          borderRadius: 1.5,
          height: "100%",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: 12, fontWeight: 500 }}>
          banner 70 x 100
        </Typography>
        <Typography sx={{ fontSize: 12, fontWeight: 500, textAlign: "center" }}>
          2
        </Typography>
        <Typography sx={{ fontSize: 12, fontWeight: 500, textAlign: "right" }}>
          $35.000
        </Typography>
        <Typography sx={{ fontSize: 12, fontWeight: 500, textAlign: "right" }}>
          $7.000.000
        </Typography>
      </Stack>
      <Stack sx={{ display: "grid", gridTemplateColumns: "80% 1fr" }}>
        <Typography
          sx={{
            fontSize: 10.5,
            fontWeight: 300,
            textAlign: "left",
            lineHeight: 1.2,
            pt: 0.2,
            pb: 0.2,
          }}
        >
          imagen de Mickey Mouse
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: 10,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Acabado: TUBOS + OJALES
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default InvoiceItem;
