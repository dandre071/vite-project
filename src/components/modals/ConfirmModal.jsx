import { Button, Typography } from "@mui/material";
import { Frown, PrinterCheck, Smile } from "lucide-react";
import React from "react";
import { customTheme } from "../../Hooks/useCustomTheme";

const ConfirmModal = ({ onClick, onClose }) => {
  return (
    <div
      style={{
        height: "20vh",
      }}
    >
      <div
        className="status-modal"
        style={{
          display: "grid",
          gridTemplateRows: "1.5fr 1fr 1fr",

          placeItems: "center",
        }}
      >
        <PrinterCheck size={80} />
        <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
          ¿Se imprimió correctamente?
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "40%",
            height: "100%",
          }}
        >
          <Smile
            size={"9vh"}
            className="btn"
            color={customTheme.palette.success.main}
            onClick={onClick}
          />
          <Frown
            size={"9vh"}
            className="btn"
            color={customTheme.palette.error.main}
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
