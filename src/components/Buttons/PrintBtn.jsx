import { Box } from "@mui/material";
import { Printer } from "lucide-react";
import React from "react";

const PrintBtn = ({ handlePrint }) => {
  return (
    <Box
      className="circled center p-fixed button"
      sx={{
        bgcolor: "success.main",
        width: 50,
        height: 50,
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
