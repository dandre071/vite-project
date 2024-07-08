import { Padding } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";

import { themeColors } from "./utils/configs";
import { header } from "../Styles/styles";
const ModalHeader = ({ title }) => {
  return (
    <>
      <Box
        style={{ ...header, height: 80, color: "black" }}
        sx={{
          width: "100%",
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
