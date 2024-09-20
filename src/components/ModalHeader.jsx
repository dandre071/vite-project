import { Padding } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";

import { themeColors } from "./utils/configs";
import { header } from "../Styles/styles";
import { customTheme } from "../Hooks/useCustomTheme";
import { Children } from "react";

const ModalHeader = ({ title, children }) => {
  return (
    <>
      <Typography
        className="m-header-title"
        variant="h5"
        //color={"primary.main"}

        fontWeight={600}
        sx={{ fontSize: 30 }}
      >
        {title}
      </Typography>
    </>
  );
};

export default ModalHeader;
