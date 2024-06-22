import { Padding } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { themeColors } from "./utils/configs";
const header = {
  display: "grid",
  height: 100,

  justifyContent: "center",

  alignItems: "center",
};

const ModalHeader = ({ title }) => {
  return (
    <>
      <Box
        style={{ ...header, height: 70 }}
        sx={{
          width: 420,

          //bgcolor: themeColors.neutralLight,
          bgcolor: themeColors.mainPrimary,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          fontWeight={600}
          fontSize={"1.8em"}
          sx={{
            textAlign: "left",
            color: themeColors.lightPrimary,
            // color: "black",

            //bgcolor: themeColors.lightPrimary,

            borderRadius: 2,
          }}
        >
          {title}
        </Typography>
      </Box>
      {/*<Divider sx={{ borderWidth: 0.7, bgcolor: "secondary.dark" }} />*/}
      {/*  <Divider sx={{ borderColor: "secondary.light", borderWidth: 1 }} /> */}
    </>
  );
};

export default ModalHeader;
