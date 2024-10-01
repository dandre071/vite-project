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
        display: "flex",
        //  flexDirection: "row",
        borderRadius: customTheme.shape.borderRadius,
        justifyContent: "space-between",
        /* border: `2px solid ${customTheme.palette.primary.main}`, */
        height: 30,
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
          //disabled={disabled}
          sx={{
            // width: "40%",
            color: "black",
            /*  bgcolor: "primary.main", */
            p: 1,
            borderRadius: 2,
            fontSize: 35,
            lineHeight: 1,
            textAlign: "right",
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
          fontSize: 35,
        }}
      >
        {text}
      </Typography>
    </Grid>
  );
};

export default PriceCalc;
