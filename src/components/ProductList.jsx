import React from "react";
import { Box, Grid, Stack } from "@mui/material";
const ProductList = () => {
  return (
    <div>
      <Box
        borderRadius={1}
        sx={{
          display: "grid",
          gridTemplateColumns: ".5fr 4fr .75fr 1fr",
          gap: 0.2,
          gridTemplateRows: "35px 55px",
          gridTemplateAreas: `"cant product  price price "
        "cant description    btn1 btn2"
        `,
          height: 90,
          background: "gray",
          padding: 0.5,
        }}
      >
        <Box sx={{ gridArea: "cant", bgcolor: "primary.main" }}>Cant</Box>
        <Box sx={{ gridArea: "product", bgcolor: "secondary.main" }}>
          Producto
        </Box>
        <Box sx={{ gridArea: "description", bgcolor: "error.main" }}>
          descripcion
        </Box>
        <Box sx={{ gridArea: "price", bgcolor: "error.main" }}>valor</Box>
        <Box sx={{ gridArea: "btn1", bgcolor: "warning.dark" }}>btn1</Box>
        <Box sx={{ gridArea: "btn2", bgcolor: "warning.dark" }}>btn2</Box>
      </Box>
    </div>
  );
};

export default ProductList;
