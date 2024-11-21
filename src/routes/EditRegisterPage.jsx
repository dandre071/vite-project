import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, stagger } from "framer-motion";
import { useFormik } from "formik";
import { add_zero, formatPhoneNumber } from "../components/utils/helpers";
import { statusList } from "../.././public/configs";

import { colPesos } from "../components/utils/configs";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const EditRegisterPage = () => {
  const location = useLocation();

 const [reg, setReg] = useState(null)
 const [status, setStatus] = useState('')
 const [payment, setPayment] = useState('')
  const navigate = useNavigate();
  const id = location.pathname.match(/[0-9]/g).join("");
  const estado = reg && reg[0].estado
  console.log(estado);
 

  const path = location.pathname;
 // console.log(path);
  const formik = useFormik({
    initialValues: {
      updatePayment: 0,
      updateDebt: 0,
      updateStatus: '',
    },
  });
  
 
 
  
  useEffect(()=>{
    fetch("http://localhost:3000/api/v1/impresosDB/registro/" + id)
      .then((res) => res.json())
      .then((data) => {
        data && setReg(data);
        formik.setValues({...formik.values, updateStatus: data[0].estado,  /* updatePayment: parseInt(data[0].abono2) */})
     setPayment(parseInt(data[0].abono2))
        //console.log(data);
      })
      .then();
  
  }, [])
  const updatePayment = formik.values.updatePayment
  //console.log(updatePayment);

  console.log(payment)

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, x: 50 }}
    >
      <div
        style={{
          border: "none",
     
        }}
      >
        <div style={{ width: 600, display: "grid", gap: "5px 5px" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "100px 160px 160px 1fr 1fr",
            }}
          >
            <Box className="grid-2-cols">
              <p className="reg-label">Cliente</p>
              <p sx={{ width: "100%" }}>particular</p>
            </Box>
            <Box className="grid-2-cols">
              <p className="reg-label">Recepción</p>
              <p>{reg && reg[0].fecha_recibido}</p>
            </Box>
            <Box className="grid-2-cols">
              <p className="reg-label">Entrega</p>
              <p>{reg && reg[0].fecha_entrega}</p>
            </Box>
            <Box className="grid-2-cols ">
              <p className="reg-label">Recibe</p>
              <p>{reg && reg[0].recibe}</p>
            </Box>
            <Box className="grid-2-cols ">
              <p className="reg-label">Realiza</p>
              <p>{reg && reg[0].realiza}</p>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "2.3fr 1fr",
            }}
          >
            <Box className="grid-2-cols">
              <p className="reg-label">Nombre</p>
              <p>{reg && reg[0].nombre}</p>
            </Box>
            <Box className="grid-2-cols ">
              <p className="reg-label">NIT</p>
              <p>{reg && reg[0].nit}</p>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <Box className="grid-2-cols">
              <p className="reg-label">Teléfono / Celular</p>
              <p>{reg && formatPhoneNumber(reg[0].telefono)}</p>
            </Box>
            <Box className="grid-2-cols">
              <p className="reg-label">Email</p>
              <p>{reg && reg[0].email}</p>
            </Box>
          </Box>

          <Box className="grid-2-cols" sx={{ height: "auto" }}>
            <p className="reg-label">Trabajo</p>

            {reg &&
              reg[0].trabajo.map((x) => {
                return <p>{x}</p>;
              })}
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
            }}
          >
            <Box className="grid-2-cols">
              <p className="reg-label">Total</p>
              <p>{reg && colPesos.format(reg[0].total)}</p>
            </Box>
            <Box className="grid-2-cols">
              <p className="reg-label">Abono 1</p>
              <p>{reg && colPesos.format(reg[0].abono1)}</p>
            </Box>
            <Box className="grid-2-cols">
              <p className="reg-label">Abono 2</p>
              <p>{reg && colPesos.format(reg[0].abono2)}</p>
            </Box>
         
            <Box className="grid-2-cols">
              <p className="reg-label">Debe</p>
              <p name='updateDebt'>
                {reg &&
                  colPesos.format(
                    reg[0].total - reg[0].abono1 - reg[0].abono2 
                  )}
              </p>
            </Box>
          </Box>

          <Box className="grid-2-cols ">
            <p className="reg-label">Observaciones</p>
            <p>{reg && reg[0].observaciones}</p>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "150px 1fr",

              gap: 1,
            }}
          >
            <Box className="grid-2-cols">
              <p className="reg-label">Estado</p>
              <p>{reg && reg[0].estado}</p>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                alignItems: "center",
                gap: 1,
              }}
            >
              <TextField
                label="Abonar"
                type="number"
                name="updatePayment"
                size="small"
                value={formik.values.updatePayment}
                defaultValue={parseInt(reg && reg[0].abono2)}
                onChange={formik.handleChange}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                <Select
                  name="updateStatus"
                  onChange={formik.handleChange}
                  size="small"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                defaultValue={formik.values.updateStatus}
                  value={formik.values.updateStatus}
                  label="Estado"
              
                  sx={{
                    inputprops: {
                      color: "red",
                    },
                  }}
              
                >
                  {statusList.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              mt: 2,
            }}
          >
            <Link to={"/"}>
              <Button
                fullWidth
                sx={{ height: 55 }}
                variant="secondary-outlined"
                className="btn"
              >
             
                <CloseRoundedIcon
             
                  sx={{ fontSize: 40, color: "secondary.main" }}
                />
              </Button>
            </Link>
            <Button
              fullWidth
              onClick={() => {
                fetch(
                  "http://localhost:3000/api/v1/impresosDB/registro/" + id,
                  {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      abono2: formik.values.updatePayment +payment,
                      resta:
                        reg[0].total -
                        reg[0].abono1 -
                        formik.values.updatePayment - payment,
                      estado: formik.values.updateStatus,
                    }),
                  }
                )
                  .then((datos) => alert('Registro actualizado exitosamente'))
                  .then((respuesta) => respuesta.text)
                  .then(navigate(`/registro/${id}`));
              }}
              variant="prime"
              sx={{ height: 55 }}
            >
              <SaveAsOutlinedIcon
                className= {formik.values.updateStatus != 'entregado'  ? "btn" : 'disable-btn'}
                sx={{ color: "white", fontSize: 40 }}
              />
              <p>Actualizar</p>
            </Button>
          </Box>
      
        </div>
      </div>
    </motion.div>
  );
};

export default EditRegisterPage;
