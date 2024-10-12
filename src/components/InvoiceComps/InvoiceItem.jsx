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
  orientation,
}) => {
  return (
    <Stack className="invoice-item border-bottom" sx={{}}>
      <Stack
        sx={{
          // bgcolor: "#f7f7f7",
          display: "grid",
          gridTemplateColumns: invoiceGrid,
          borderRadius: 1.5,
          minHeight: 30,
          alignItems: "center",
        }}
      >
        <Typography
          className="invoice-content-data-l capitalize"
          sx={{ fontWeight: 600, fontSize: 13 }}
        >
          {`${product} / ${orientation} `}
        </Typography>
        <div
          style={{
            backgroundColor: "#f5f5f5",
            width: "100%",
            borderRadius: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {q}
          </Typography>
        </div>

        <Typography sx={{ fontSize: 13, fontWeight: 600, textAlign: "right" }}>
          {price}
        </Typography>
        <Typography sx={{ fontSize: 13, fontWeight: 600, textAlign: "right" }}>
          {totalPrice}
        </Typography>
      </Stack>
      <Stack
        sx={{ display: "grid", gridTemplateColumns: "70% 1fr", height: "auto" }}
      >
        <Typography
          className="secondary-color capitalize"
          sx={{
            fontSize: 11.5,
            fontWeight: 400,
            textAlign: "left",
            lineHeight: 1.2,
            pt: 0.2,
            pb: 0.2,
            mb: 1,
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
          <Box
            sx={{
              lineHeight: 1.2,
              display: "flex",
              justifyContent: "center",
              bgcolor: "#f7f7f7",
              width: "90%",
              height: "90%",
              borderRadius: 1,
              alignItems: "center",
              p: 0.1,
            }}
          >
            <Typography
              className="secondary-color"
              sx={{
                fontSize: 11,
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              {` ${finish.join(" + ")}`}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default InvoiceItem;
