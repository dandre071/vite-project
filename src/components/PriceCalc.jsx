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
        bgcolor: "background.light",
        borderRadius: customTheme.shape.borderRadius,
        //gridTemplateColumns: "4fr 8fr",
        justifyContent: "space-between",
        //border: `1px solid ${customTheme.palette.secondary.main}`,
        p: 2,

        alignItems: "center",

        // justifyContent: "center",
      }}
      item
    >
      <Box>
        <CalcBtn
          onClick={onClick}
          /* sx={secondaryBtn} */ disabled={disabled}
        />
      </Box>
      <Box>
        <Typography
          //disabled={disabled}
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
          //disabled={disabled}
          value={value}
          name={name}
          onChange={onChange}
          sx={{
            fontWeight: 700,
            color: "text.dark",
            display: "flex",
            justifyContent: "right",
            textAlign: "right",
            fontSize: 30,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Grid>
  );
};

export default PriceCalc;
