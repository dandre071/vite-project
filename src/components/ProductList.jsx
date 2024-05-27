import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";

const data = [
  {
    id: 1,
    cant: 2,
    product: "1000 tarjetas en brillo",
    description: "blah blah blah",
    price: 2000000,
  },
];
const style = {
  padding: 2,
};
const ProductList = () => {
  return (
    <div>
      <Box
        borderRadius={1}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(9, 1fr)",
          gap: 0.2,
          gridTemplateRows: "35px 55px",
          gridTemplateAreas: `"cant product product product product product product price price "
        "cant-value description  description description description description description  btn1 btn2"
        `,
          height: 90,
          background: "#fafafa",
          padding: 0.5,
        }}
      >
        <Box
          sx={{
            gridArea: "cant",

            display: "grid",
            justifyContent: "center",
            alignContent: "center",
          }}
          style={style}
        >
          Cant
        </Box>

        <Box sx={{ gridArea: "cant-value" }}>{data[0].cant}</Box>
        <Box
          sx={{
            gridArea: "product",

            textAlign: "left",
            paddingLeft: 1,
            fontWeight: 700,
          }}
        >
          {data[0].product}
        </Box>

        <Box sx={{ gridArea: "description" }}>{data[0].description}</Box>
        <Box
          sx={{
            gridArea: "price",

            display: "grid",
            alignItems: "center",
            textAlign: "right",
            paddingRight: 1,
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          {`$ ${data[0].price}`}
        </Box>
        <Box sx={{ gridArea: "btn1", display: "grid" }}>
          <ClearIcon
            color="warning"
            fontSize="large"
            sx={{ placeSelf: "center" }}
          />
        </Box>
        <Box
          sx={{
            gridArea: "btn2",

            display: "grid",
          }}
        >
          <EditIcon
            color="success"
            fontSize="medium"
            sx={{ alignSelf: "center", justifySelf: "center" }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default ProductList;
