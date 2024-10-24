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
        height: "80%",
        gridTemplateColumns: "auto 1fr",
        gap: 2,
        justifyContent: "end",
        justifySelf: "end",
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
            fontSize: 16,
            lineHeight: 1,
            textAlign: "end",
            fontWeight: 500,
          }}
        >
          Total:
        </Typography>
      </Box>{" "}
      <Typography
        value={value}
        name={name}
        onChange={onChange}
        sx={{
          fontWeight: 700,
          color: "primary.dark",
          display: "flex",

          textAlign: "end",
          fontSize: 28,
        }}
      >
        {text}
      </Typography>
    </Grid>
  );
};

export default PriceCalc;
