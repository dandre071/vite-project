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
        width: '100%',
        height: "100%",
        
        gap: 2,
      justifyContent: 'center',

      
        alignItems: "center",
       /*  border: '2px solid blackn', */
        backgroundColor: "success.light",
        borderRadius: 1.5,
      }}
    
    >
      {/* <Box>
        <CalcBtn
          onClick={onClick}
         disabled={disabled}
        />
      </Box> */}
      <Box sx={{  p: 0.8, borderRadius: 1.5 }}>
        <Typography
          sx={{
            color: "white",

          
            fontSize: 26,
            lineHeight: 1,
        
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
            color: "white",
            display: "flex",

 
            fontSize: 26,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Grid>
  );
};

export default PriceCalc;
