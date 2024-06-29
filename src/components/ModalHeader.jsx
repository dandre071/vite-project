import { Padding } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";

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
        style={{ ...header, height: 60 }}
        sx={{
          width: 350,

          bgcolor: themeColors.mainPrimary,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          fontWeight={600}
          fontSize={"1.5em"}
          sx={{
            textAlign: "left",
            color: themeColors.lightPrimary,

            borderRadius: 2,
          }}
        >
          {title}
        </Typography>
      </Box>
    </>
  );
};

export default ModalHeader;
