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
        id="modal-header"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          mb: 0,
          height: 100,
          // borderBottom: `1px solid ${customTheme.palette.background.dark}`,
          // bgcolor: "primary.main",
        }}
      >
        <Box className="icon-container"> {children}</Box>

        <Typography
          className="m-header-title"
          variant="h5"
          //color={"primary.main"}
          color={"black"}
          fontWeight={600}
          sx={{ fontSize: 30 }}
        >
          {title}
        </Typography>
      </Box>
    </>
  );
};

export default ModalHeader;
