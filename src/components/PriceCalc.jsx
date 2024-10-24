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
      <Box sx={{ backgroundColor: "primary.main", p: 0.8, borderRadius: 1.5 }}>
        <Typography
          sx={{
            color: "white",

            borderRadius: 2,
            fontSize: 24,
            lineHeight: 1,
            textAlign: "end",
            fontWeight: 500,
          }}
        >
          Total:
        </Typography>
      </Box>{" "}
      <Box>
        <Typography
          value={value}
          name={name}
          onChange={onChange}
          sx={{
            fontWeight: 900,
            color: "primary.dark",
            display: "flex",

            textAlign: "end",
            fontSize: 28,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Grid>
  );
};

export default PriceCalc;
