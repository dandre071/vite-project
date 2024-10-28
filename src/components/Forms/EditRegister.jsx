import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const EditRegister = () => {
  const id = location.pathname.match(/[0-9]/g).join("");
  console.log(id);
  const [reg, setReg] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/impresosDB/registro/" + id)
      .then((res) => res.json())
      .then((data) => {
        setReg(data);
        console.log(data);
      });
  }, []);
  console.log(reg);
  console.log();
  return (
    <div>
      {reg && (
        <div>
          <p>{reg[0].id}</p>
          <p>{reg && reg[0].nombre}</p>
          <p>{reg && reg[0].nombre}</p>
        </div>
      )}
    </div>
  );
};

export default EditRegister;
