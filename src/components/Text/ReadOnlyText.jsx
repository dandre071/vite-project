import { Box, Typography } from "@mui/material";
import React from "react";

const ReadOnlyText = ({ title, content }) => {
  return (
    <Box sx={{ bgcolor: "red" }}>
      <Box>
        <Typography variant="h6">
          {title}
          fdfdfd
        </Typography>
      </Box>
    </Box>
  );
};

export default ReadOnlyText;
