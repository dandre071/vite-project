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
          height: 80,
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          pb: 2,
          mb: 2,
          borderBottom: `1px solid ${customTheme.palette.background.dark}`,
          // bgcolor: "primary.main",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 900, color: "text.main" }}>
          {title}
        </Typography>
      </Box>
    </>
  );
};

export default ModalHeader;
