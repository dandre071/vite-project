import React from "react";

const header = {
  display: "flex",
  /*background: "#1304a4",*/
  color: "#1304a4",
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
