import { Padding } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";

import { themeColors } from "./utils/configs";
import { header } from "../Styles/styles";
import { customTheme } from "../Hooks/useCustomTheme";
const ModalHeader = ({ title }) => {
  return (
    <>
      <Box
        sx={{
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          pt: 1,
          pb: 2,
          borderBottom: `3px solid ${customTheme.palette.background.dark}`,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 900 }}>
          {title}
        </Typography>
      </Box>
    </>
  );
};

export default ModalHeader;
