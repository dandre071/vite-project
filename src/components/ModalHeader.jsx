import { Padding } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";

import { themeColors } from "./utils/configs";
import { header } from "../Styles/styles";
import { customTheme } from "../Hooks/useCustomTheme";
import { Children } from "react";

const ModalHeader = ({ title, children }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          position: "relative",
          mb: 0,
          height: 100,
        }}
      >
        {/* <div className="icon-parent">
          <Box className="icon-container"> {children}</Box>
        </div> */}

        <Typography
          className="m-header-title"
          variant="h5"
          //color={"primary.main"}
          color={"black"}
          fontWeight={600}
          sx={{ fontSize: 30, mb: 2 }}
        >
          {title}
        </Typography>
      </Box>
    </>
  );
};

export default ModalHeader;
