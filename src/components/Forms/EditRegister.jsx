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
import { add_zero, formatPhoneNumber } from "../utils/helpers";
import { statusList } from "../../../public/configs";
import { Save } from "lucide-react";
import { colPesos } from "../utils/configs";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";

const EditRegister = () => {
  const id = location.pathname.match(/[0-9]/g).join("");
  console.log(id);
  const [reg, setReg] = useState({});

  /*   const getReg = () => {
    fetch("http://localhost:3000/api/v1/impresosDB/registro/" + id)
      .then((res) => res.json())
      .then((data) => {
        data && setReg(data);
        console.log(data);
      });
  }; */
  // console.log("http://localhost:3000/api/v1/impresosDB/registro/" + id);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/impresosDB/registro/" + id)
      .then((res) => res.json())
      .then((data) => {
        data && setReg(data);
      });
  }, []);
  /* useEffect(() => {
    fetch("http://localhost:3000/api/v1/impresosDB/registro/" + id)
      .then((res) => res.json())
      .then((data) => {
        data && setReg(data);
        console.log(data);
      });
  }, []); */

  console.log(reg);
  const path = location.pathname;
  console.log(path);
  const formik = useFormik({
    initialValues: {
      updatePayment: 0,
      updateDebt: null,
      updateStatus: "",
    },
  });

  /*   const updateReg = () => {
    fetch("http://localhost:3000/api/v1/impresosDB/registro/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        abono2: formik.values.updatePayment,
        resta: formik.values.updateDebt,
        estado: formik.values.updateStatus,
      }),
    })
      .then((respuesta) => respuesta.ok)
      .then((datos) => console.log(datos));

  }; */
  console.log(reg);
  const navigate = useNavigate();
  let textClass;
  const status = () => {
    if (reg.estado === "ENTREGADO") {
      textClass = "success-bg";
      return textClass;
    }
  };
  /* console.log(textClass, reg[0].estado); */

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, x: 50 }}
    >
      <div
        style={{
          border: "none",
          /*   background: "red", */
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
                console.log(x);
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
            {/*<Box className="grid-2-cols border-bottom">
            <p className="reg-label">Debe</p>
            <p>{reg && reg[0].resta}</p>
          </Box>*/}
            <Box className="grid-2-cols">
              <p className="reg-label">Debe</p>
              <p>{reg && colPesos.format(reg[0].resta)}</p>
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
            <Box className={`grid-2-cols ${status}`}>
              <p className="reg-label">Estado</p>
              <p>{reg && reg[0].estado}</p>
            </Box>
            {/*  <Box
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
            </Box> */}
          </Box>

          <Link to={`/registro/${id}/editar-registro/`} state={{ from: reg }}>
            <Button
              /* onClick={() => {
              fetch("http://localhost:3000/api/v1/impresosDB/registro/" + 2, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  abono2: formik.values.updatePayment,
                  resta: formik.values.updateDebt,
                  estado: formik.values.updateStatus,
                }),
              })
                .then((datos) => console.log(id))
                .then((respuesta) => respuesta.ok)
                .then((datos) => console.log(datos));
            }} */
              /* onClick={() => {
              navigate(`/registro/${id}/editar-registro/`);
            }} */
              variant="prime"
              sx={{ height: 55, mt: 2, gap: 2 }}
            >
              <EditIcon className="btn" sx={{ color: "white", fontSize: 40 }} />
              <p>Actualizar</p>
            </Button>
          </Link>
          {/*   <p>{reg && Object.values(reg[0]).map((x) => <p>{x}</p>)}</p> */}
        </div>
      </div>
    </motion.div>
  );
};

export default EditRegister;
