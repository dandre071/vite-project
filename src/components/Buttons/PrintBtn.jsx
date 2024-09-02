import { Box } from "@mui/material";
import { Printer } from "lucide-react";
import React from "react";

const PrintBtn = ({ handlePrint }) => {
  return (
    <Box
      className="circle center p-fixed button"
      sx={{
        bgcolor: "secondary.main",
        width: 40,
        height: 40,
      }}
    >
      <Printer
        onClick={handlePrint}
        size={30}
        strokeWidth={1.5}
        absoluteStrokeWidth
        style={{ color: "white" }}
      />
    </Box>
  );
};

export default PrintBtn;
