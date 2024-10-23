import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CalcBtn from "./Buttons/CalcBtn";
import { secondaryBtn } from "../Styles/styles";
import { customTheme } from "../Hooks/useCustomTheme";

const PriceCalc = ({ name, onClick, onChange, text, value, disabled }) => {
  return (
    <Grid
      disabled={disabled}
      sx={{
        display: "grid",
        //  flexDirection: "row",
        borderRadius: customTheme.shape.borderRadius,
        justifyContent: "center",
        /* border: `2px solid ${customTheme.palette.primary.main}`, */

        alignItems: "center",
      }}
      item
    >
      {/* <Box>
        <CalcBtn
          onClick={onClick}
         disabled={disabled}
        />
      </Box> */}
      <Box>
        <Typography
          sx={{
            color: "black",

            borderRadius: 2,
            fontSize: 20,
            lineHeight: 1,
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          Total:
        </Typography>
      </Box>{" "}
      <Typography
        //disabled={disabled}
        value={value}
        name={name}
        onChange={onChange}
        sx={{
          fontWeight: 700,
          color: "secondary.main",
          display: "flex",
          justifyContent: "right",
          textAlign: "right",
          fontSize: 30,
        }}
      >
        {text}
      </Typography>
    </Grid>
  );
};

export default PriceCalc;
