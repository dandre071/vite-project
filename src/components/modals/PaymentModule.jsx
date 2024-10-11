import { Box, Button, TextField } from "@mui/material";
import ModalHeader from "../ModalHeader";
import FormSelect2 from "../Forms/FormSelect2";
import { Formik, useFormik } from "formik";
import { usePaymentData } from "../../store/paymentData";

const PaymentModule = ({ onClose, formikValues }) => {
  const formik = formikValues;

  const addData = usePaymentData((state) => state.addData);
  const paymentData = () => {
    addData(formikValues.values);
  };
  return (
    <Box
      sx={{
        width: 350,
        height: 300,
        bgcolor: "white",
        borderRadius: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "80%", height: "90%" }} className="modal-box">
        <Box sx={{}}>
          <ModalHeader title={"Abonar"} />{" "}
        </Box>
        <Box
          sx={{
            display: "block",

            gap: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField label={"Abono"} name="payment" />
          <FormSelect2
            size="normal"
            value={formik.values.paymentMethod}
            defaultValue={formik.values.paymentMethod}
            error={formik.errors.paymentMethod}
            helperText={formik.errors.paymentMethod}
            name="paymentMethod"
            onChange={formik.handleChange}
            options={["Efectivo", "Transferencia"]}
            label={"Medio de pago"}
          />
        </Box>
        <Box>
          {" "}
          <Button
            sx={{ height: "100%" }}
            variant="secondary-outlined"
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button variant="prime" onClick={paymentData} sx={{ height: "100%" }}>
            Aceptar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentModule;
