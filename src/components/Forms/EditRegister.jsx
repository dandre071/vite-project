import React, { useEffect, useState } from "react";

const EditRegister = () => {
  const id = location.pathname.match(/[0-9]/g);
  console.log(id);
  const [reg, setReg] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/impresosDB/registro/" + id)
      .then((res) => res.json())
      .then((data) => {
        /*  setReg(data); */
        console.log(data);
      });
  }, []);
  console.log(reg);
  console.log();
  return <div>EditRegister</div>;
};

export default EditRegister;
