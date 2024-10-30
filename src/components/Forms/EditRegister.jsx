import { TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, stagger } from "framer-motion";
import { useFormik } from "formik";
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

  const formik = useFormik({
    initialValues: {
      updatePayment: 0,
      updateDebt: null,
      updateStatus: "",
    },
  });
  console.log(formik.values.updatePayment);
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, x: 50 }}
    >
      <div
        className="product-module-grid"
        style={{
          border: "none",
        }}
      >
        <div>
          <p>{id}</p>
          <p>{reg && reg[0].fecha_recibido}</p>
          <p>{reg && reg[0].fecha_entrega}</p>
          <p>{reg && reg[0].nombre}</p>
          <p>{reg && reg[0].nit}</p>
          <p>{reg && reg[0].telefono}</p>
          <p>{reg && reg[0].email}</p>
          <p>{reg && reg[0].trabajo}</p>
          <p>{reg && reg[0].recibe}</p>
          <p>{reg && reg[0].realiza}</p>
          <p>{reg && reg[0].total}</p>
          <p>{reg && reg[0].abono1}</p>
          <p>{reg && reg[0].resta - formik.values.updatePayment}</p>
          <p>{formik.values.updatePayment}</p>
          <p>{reg && reg[0].observaciones}</p>
          <p>{reg && reg[0].estado}</p>
          <TextField
            label="Actualizar Pago"
            type="number"
            name="updatePayment"
            onChange={formik.handleChange}
          />
          {/*   <p>{reg && Object.values(reg[0]).map((x) => <p>{x}</p>)}</p> */}
        </div>
      </div>
    </motion.div>
  );
};

export default EditRegister;
