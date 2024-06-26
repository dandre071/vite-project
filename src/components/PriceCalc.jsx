import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CalcBtn from "./Buttons/CalcBtn";
import { secondaryBtn } from "../Styles/styles";

const PriceCalc = ({ name, onClick, onChange, text, value }) => {
  return (
    <Grid
      sx={{
        display: "grid",
        bgcolor: "primary.light",
        borderRadius: 2,
        gridTemplateColumns: "4fr 8fr",
        p: 1.5,
        alignItems: "center",

        justifyContent: "center",
      }}
      item
    >
      <Box>
        <CalcBtn onClick={onClick} sx={secondaryBtn} />
      </Box>
      <Box>
        <Typography
          sx={{
            // width: "40%",
            alignContent: "center",
            justifyContent: "end",
            lineHeight: 1,
            textAlign: "right",
          }}
        >
          Total:
        </Typography>
        <Typography
          value={value}
          name={name}
          onChange={onChange}
          sx={{
            fontWeight: 700,
            color: "text.dark",
            display: "flex",
            justifyContent: "right",
            textAlign: "right",
            fontSize: 25,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Grid>
  );
};

export default PriceCalc;
