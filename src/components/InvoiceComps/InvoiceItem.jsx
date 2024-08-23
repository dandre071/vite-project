import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { invoiceGrid } from "../../Styles/styles";

const InvoiceItem = ({
  product,
  q,
  price,
  totalPrice,
  finish,
  description,
}) => {
  return (
    <Stack className="invoice-item border-bottom" sx={{}}>
      <Stack
        sx={{
          // bgcolor: "#f7f7f7",
          display: "grid",
          gridTemplateColumns: invoiceGrid,
          borderRadius: 1.5,
          height: "100%",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: 12, fontWeight: 500 }}>
          {product}
        </Typography>
        <Typography sx={{ fontSize: 12, fontWeight: 500, textAlign: "center" }}>
          {q}
        </Typography>
        <Typography sx={{ fontSize: 12, fontWeight: 500, textAlign: "right" }}>
          {price}
        </Typography>
        <Typography sx={{ fontSize: 12, fontWeight: 700, textAlign: "right" }}>
          {totalPrice}
        </Typography>
      </Stack>
      <Stack sx={{ display: "grid", gridTemplateColumns: "70% 1fr" }}>
        <Typography
          className="secondary-color"
          sx={{
            fontSize: 10.5,
            fontWeight: 300,
            textAlign: "left",
            lineHeight: 1.2,
            pt: 0.2,
            pb: 0.2,
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            className="secondary-color"
            sx={{
              fontSize: 10,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Acabado: <br /> {finish}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default InvoiceItem;
