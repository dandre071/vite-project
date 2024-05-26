import React from "react";

const header = {
  display: "flex",
  background: "#1c1c30",
  height: 70,
  alignItems: "center",
  justifyContent: "center",
};

const ModalHeader = ({ title }) => {
  return (
    <>
      <div style={header}>
        <h1 style={{ color: "white" }}>{title}</h1>
      </div>
    </>
  );
};

export default ModalHeader;
