import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { customTheme } from "../../Hooks/useCustomTheme";
import { ModalCardStyle } from "../../Styles/styles";

const ModalCard = ({ children, title, onClick }) => {
  return (
    <Box>
      <Box sx={{}}>
        <Stack onClick={onClick} sx={ModalCardStyle}>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 1000,
                color: "white",
                lineHeight: 1,
              }}
            >
              {title}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ModalCard;
