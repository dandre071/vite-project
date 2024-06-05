import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import { fontGrid } from "@mui/material/styles/cssUtils";

const ProductList = () => {
  let data = localStorage.getItem("ddsdsfdf");

  return (
    <div>
      <Box
        borderRadius={1}
        sx={{
          maxWidth: 600,
          display: "grid",
          gridTemplateColumns: "1fr 4fr 2fr 2fr 1.5fr",
          gap: 0.2,
          gridTemplateRows: " 35px 35px",
          gridTemplateAreas: ` "cant-value product product product product product product product unit-price  price btn1"
        "cant-value description description description description description description description description description btn1"
        `,

          background: "white",
          padding: 0.5,
          borderStyle: "solid",
          borderWidth: 0,
          borderColor: "secondary",
        }}
      >
        <Box
          sx={{
            gridArea: "cant-value",
            display: "grid",
            alignContent: "center",
            justifyContent: "center",

            padding: 0,
          }}
        >
          {data[0].cant}
        </Box>

        <Box
          sx={{
            gridArea: "product",
            display: "grid",
            textAlign: "left",

            justifyContent: "start",
            alignContent: "center",

            margin: 0,
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: 18, color: "black" }}>
            {data[0].product}
          </Typography>
        </Box>

        <Box sx={{ gridArea: "description" }}>
          <Typography
            fullWidth
            sx={{
              margin: 0,
              fontWeight: 300,
              fontSize: 13,
              color: "secondary.main",
            }}
          >
            {data[0].description}
          </Typography>
        </Box>

        <Box
          sx={{
            gridArea: "price",
            color: "black",
            display: "grid",
            alignItems: "center",
            textAlign: "right",

            fontSize: 18,
            fontWeight: 700,
          }}
        >
          {`$ ${data[0].price}`}
        </Box>

        <Box
          sx={{
            gridArea: "unit-price",
            color: "secondary.main",
            display: "grid",
            alignItems: "center",
            textAlign: "right",
            paddingRight: 2,
            fontSize: 18,
            fontWeight: 400,
          }}
        >
          {`$ ${data[0].price}`}
        </Box>
        <Box sx={{ gridArea: "btn1", display: "grid", paddingLeft: 1 }}>
          <ClearIcon
            color="warning"
            fontSize="medium"
            sx={{ placeSelf: "center" }}
          />
        </Box>
      </Box>
      <Divider sx={{ borderWidth: 1.5 }} />
    </div>
  );
};

export default ProductList;
