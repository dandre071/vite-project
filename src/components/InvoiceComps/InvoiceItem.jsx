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
  finishQ,
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
        <Typography
          className="invoice-content-data-l"
          sx={{ fontWeight: 600, fontSize: 13 }}
        >
          {product}
        </Typography>
        <Typography sx={{ fontSize: 13, fontWeight: 600, textAlign: "center" }}>
          {q}
        </Typography>
        <Typography sx={{ fontSize: 13, fontWeight: 600, textAlign: "right" }}>
          {price}
        </Typography>
        <Typography sx={{ fontSize: 13, fontWeight: 600, textAlign: "right" }}>
          {totalPrice}
        </Typography>
      </Stack>
      <Stack sx={{ display: "grid", gridTemplateColumns: "70% 1fr" }}>
        <Typography
          className="secondary-color capitalize"
          sx={{
            fontSize: 11.5,
            fontWeight: 400,
            textAlign: "left",
            lineHeight: 1.2,
            pt: 0.2,
            pb: 0.2,
            alignContent: "start",
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
              fontSize: 11,
              fontWeight: 500,
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            Acabado: <br /> {`${finishQ} ${finish}`}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default InvoiceItem;
