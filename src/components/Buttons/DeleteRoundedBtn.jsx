import { Box } from "@mui/material";
import { Delete, Printer, Trash, X } from "lucide-react";
import React from "react";

const DeleteRoundedBtn = ({ handlePrint }) => {
  return (
    <Box
      className="circle center p-fixed button"
      sx={{
        bgcolor: "red",
        width: 50,
        height: 50,
      }}
    >
      <X
        onClick={handlePrint}
        size={30}
        strokeWidth={3}
        absoluteStrokeWidth
        style={{ color: "white" }}
      />
    </Box>
  );
};

export default DeleteRoundedBtn;
