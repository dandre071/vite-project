import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, stagger } from "framer-motion";
import { useFormik } from "formik";
import { add_zero, formatPhoneNumber } from "../utils/helpers";
import { statusList } from "../../../public/configs";
import { Save } from "lucide-react";
import { colPesos } from "../utils/configs";

const EditRegister = () => {
  const id = location.pathname.match(/[0-9]/g).join("");
  console.log(id);
  const [reg, setReg] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/impresosDB/registro/" + id)
      .then((res) => res.json())
      .then((data) => {
        data && setReg(data);
        console.log(data);
      });
  }, []);
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
  console.log(formik.values.updatePayment);
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
        <div style={{ width: 600 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "100px 160px 160px 1fr 1fr",
            }}
          >
            <Box className="grid-2-cols" sx={{ width: "100%" }}>
              <Typography className="reg-label" sx={{ width: "100%" }}>
                Cliente
              </Typography>
              <Typography sx={{ width: "100%" }}>particular</Typography>
            </Box>
            <Box className="grid-2-cols">
              <Typography className="reg-label">Recepción</Typography>
              <Typography>{reg && reg[0].fecha_recibido}</Typography>
            </Box>
            <Box className="grid-2-cols">
              <Typography className="reg-label">Entrega</Typography>
              <Typography>{reg && reg[0].fecha_entrega}</Typography>
            </Box>
            <Box className="grid-2-cols border-bottom">
              <Typography className="reg-label">Recibe</Typography>
              <Typography>{reg && reg[0].recibe}</Typography>
            </Box>
            <Box className="grid-2-cols border-bottom">
              <Typography className="reg-label">Recibe</Typography>
              <Typography>{reg && reg[0].realiza}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
            }}
          >
            <Box className="grid-2-cols border-bottom">
              <Typography className="reg-label">Nombre</Typography>
              <Typography>{reg && reg[0].nombre}</Typography>
            </Box>
            <Box className="grid-2-cols border-bottom">
              <Typography className="reg-label">NIT</Typography>
              <Typography>{reg && reg[0].nit}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <Box className="grid-2-cols border-bottom">
              <Typography className="reg-label">Teléfono / Celular</Typography>
              <Typography>
                {reg && formatPhoneNumber(reg[0].telefono)}
              </Typography>
            </Box>
            <Box className="grid-2-cols border-bottom">
              <Typography className="reg-label">Email</Typography>
              <Typography>{reg && reg[0].email}</Typography>
            </Box>
          </Box>

          <Box className="grid-2-cols border-bottom" sx={{ height: "auto" }}>
            <Typography className="reg-label">Trabajo</Typography>
            <Box>
              {reg &&
                reg[0].trabajo.map((x) => {
                  return <Typography>{x}</Typography>;
                  console.log(x);
                })}
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
            }}
          >
            <Box className="grid-2-cols border-bottom">
              <Typography className="reg-label">Total</Typography>
              <Typography>{reg && colPesos.format(reg[0].total)}</Typography>
            </Box>
            <Box className="grid-2-cols border-bottom">
              <Typography className="reg-label">Abono 1</Typography>
              <Typography>{reg && colPesos.format(reg[0].abono1)}</Typography>
            </Box>
            <Box className="grid-2-cols border-bottom">
              <Typography className="reg-label">Abono 2</Typography>
              <Typography>{reg && colPesos.format(reg[0].abono2)}</Typography>
            </Box>
            {/*<Box className="grid-2-cols border-bottom">
            <Typography className="reg-label">Debe</Typography>
            <Typography>{reg && reg[0].resta}</Typography>
          </Box>*/}
            <Box className="grid-2-cols border-bottom">
              <Typography className="reg-label">Debe</Typography>
              <Typography>{reg && colPesos.format(reg[0].resta)}</Typography>
            </Box>
          </Box>

          <Box className="grid-2-cols ">
            <Typography className="reg-label">Observaciones</Typography>
            <Typography>{reg && reg[0].observaciones}</Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "150px 1fr",

              gap: 1,
            }}
          >
            <Box className="grid-2-cols border-bottom">
              <Typography className="reg-label">Estado</Typography>
              <Typography>{reg && reg[0].estado}</Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",

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
                  size="small"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  /* value={age} */
                  label="Estado"
                  /* onChange={handleChange} */
                >
                  {statusList.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button>
                <Save />
              </Button>
            </Box>
          </Box>

          {/*   <p>{reg && Object.values(reg[0]).map((x) => <p>{x}</p>)}</p> */}
        </div>
      </div>
    </motion.div>
  );
};

export default EditRegister;
