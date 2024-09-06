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
          height: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pb: 2,
          pt: 5,
          mb: 2,
          borderBottom: `1px solid ${customTheme.palette.background.dark}`,
          // bgcolor: "primary.main",
        }}
      >
        <Box className="icon-container"> {children}</Box>

        <Typography className="m-header-title" variant="h5" fontWeight={600}>
          {title}
        </Typography>
      </Box>
    </>
  );
};

export default ModalHeader;
