import * as fs from "fs";

import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { colPesos } from "../components/utils/configs";
import { useGetCartTotalPrice } from "../Hooks/hooks";
import { usePersonalData, useShoppingCart } from "../store/shoppingCart";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { finishOperation } from "../components/utils/helpers";
import { useEffect, useRef } from "react";
import generatePDF from "react-to-pdf";
import Factura from "./factura";
import NavBtn from "../Hooks/useCartItems";
import { modal } from "../Styles/styles";
import FormSelect2 from "../components/Forms/FormSelect2";
import { Form, useFormik } from "formik";
import { PaymentSchema, PersonSchema } from "../components/Validations";
import ModalHeader from "../components/ModalHeader";
import { FormInputDate } from "../components/Forms/FormInputDate";
import {
  LocalizationProvider,
  MuiPickersAdapterContext,
} from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField, DateTimePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useState } from "react";
import DatePicker from "../components/Forms/DatePicker";
import { users } from "../db";
import { usePaymentData } from "../store/paymentData";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PaidIcon from "@mui/icons-material/Paid";
import { customTheme } from "../Hooks/useCustomTheme";
import { endPoints } from "../../backend/endPoints";
/* import { getProducts } from "../../backend/controller"; */
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Bogota");
const style = { left: "50%", rigth: "50%" };
const Payment = ({ height }) => {
  const client = usePersonalData((state) => state.personalData);
  const payment = usePaymentData((state) => state.paymentData);
  useEffect(() => {
    const updateState = () => {
      formik.setValues({
        receives: payment.receives,
        do: payment.do,
        delivery: payment.delivery,
        payment: payment.payment,
        comments: payment.comments,
        pending: payment.pending,
      });
    };
    updateState();
  }, []);
  const [openModal, setOpenModal] = useState(false);
  const [openPay, setOpenPay] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(null);
  const [payMethod, setPayMethod] = useState(null);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const totalPrice = useGetCartTotalPrice();
  const clearCart = useShoppingCart((state) => state.clearCart);
  const targetRef = useRef();
  const show = false;
  const payRef = useRef();
  const items = useShoppingCart((state) => state.items);
  const totalPayment = colPesos.format(totalPrice);
  const [date, setDate] = useState();
  const [value, setValue] = useState();
  //console.log(users);
  //const dateString = newDate.toString();
  //console.log(dateString);
  const formik = useFormik({
    initialValues: {
      receives: "",
      do: "",
      delivery: new Date(),
      payment: null,
      comments: "",
      pending: null,
      paymentMethod: "Efectivo",
    },
    validationSchema: PaymentSchema,

    // onSubmit: handleSubmit,
  });
  const paymentData = usePaymentData((state) => state.paymentData);
  const personalData = usePersonalData((state) => state.personalData);
  const addData = usePaymentData((state) => state.addData);
  const deliveryDate = formik.values.delivery && formik.values.delivery["$d"];
  const newDateFormat = new Intl.DateTimeFormat("es-CO", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Bogota",
  }).format(deliveryDate);

  const handleAddData = () => {
    addData({ ...formik.values, delivery: newDateFormat });
    handleOpenModal();
    /* formik.resetForm();
    setOpen(false); */
  };
  /*   const products = getProducts(); */
  console.log(products);
  /*   console.log(getProducts); */

  const handleDate = () => {
    formik.setValues({ ...formik.values, delivery: newDateFormat });
  };
  // console.log(newDateFormat);
  const handleDeliveryDate = () => {
    formik.setValues();
  };

  //console.log(formik.values);

  const handleChange = (e) => {
    formik.setValues({
      ...formik.values,
      payment: e.target.value,
      pending: totalPrice - formik.values.payment,
    });
  };

  // console.log(newDateFormat);
  const styles = {
    payment: {
      fontWeight: 800,
      color: "text.main",
      fontSize: 18,
    },
    paymentAmount: {
      fontWeight: 500,
      color: "grey",
      fontSize: 16,
    },
    paymentBox: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "end",

      borderBottom: `1.5px solid background.dark`,
    },
  };
  const [paidAmount, setPaidAmount] = useState(0);
  const salesPeople = endPoints.users;
  return (
    <Stack
      sx={{
        minHeight: "100%",
        width: 400,
        display: "grid",
        bgcolor: "#f6f7f9",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        gridTemplateRows: "15% 20% 1fr 20%",
        justifyContent: "center",
        alignItems: "center",

        // overflow: 'auto',
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <ModalHeader title={"Resumen de compra"} />

        <div className="success circle btn" onClick={() => setOpenPay(true)}>
          <PaidIcon
            className="btn"
            sx={{ color: "success.main", fontSize: 55, p: 0 }}
          />
        </div>
      </Box>

      <Stack
        /*    className="border-bottom-heavy" */
        sx={{
          width: 350,
          height: "100%",
          display: "grid",
          gridTemplateRows: "repeat(4, 30px)",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "start",
          p: 0,
          bgcolor: "#f1f1f1",
          borderRadius: 1.5,
        }}
      >
        {/* first item */}
        <Box sx={{ ...styles.paymentBox, p: 0, width: 340 }}>
          <Typography
            sx={styles.payment}
          >{`Productos: (${items.length})`}</Typography>
          <Typography sx={{ ...styles.payment, textAlign: "right" }}>
            {totalPayment}
          </Typography>
        </Box>
        {/* end first item */}
        {/* second item */}
        <Box sx={{ ...styles.paymentBox }}>
          <Typography sx={styles.paymentAmount}>{`Pago: `}</Typography>
          <Typography
            onChange={formik.handleChange}
            value={formik.values.payment}
            sx={{ ...styles.paymentAmount, textAlign: "right" }}
          >
            {colPesos.format(paymentAmount)}
          </Typography>
        </Box>

        <Box
          sx={{
            ...styles.paymentBox,
          }}
        >
          <Typography
            name="pending"
            sx={styles.paymentAmount}
          >{`Pendiente: `}</Typography>
          <Typography
            name={"pending"}
            sx={{ ...styles.paymentAmount, textAlign: "right" }}
          >
            {colPesos.format(totalPrice - formik.values.payment)}
          </Typography>
        </Box>
        {/* end third item */}
        <Box
          sx={{
            ...styles.paymentBox,
          }}
        >
          <Typography sx={styles.paymentAmount}>{`Medio de pago: `}</Typography>
          <Typography sx={{ ...styles.paymentAmount, textAlign: "right" }}>
            {payMethod}
          </Typography>
        </Box>
      </Stack>
      <Stack
        spacing={1}
        sx={{
          display: "grid",
          gridTemplateRows: "auto auto 1fr",
          alignItems: "start",
          /*   bgcolor: "pink", */
          width: "100%",
          height: "95%",
        }}
      >
        {/* END */}
        <Box
          sx={{
            gap: 1,
            display: "grid",
            width: "100%",
            height: "100%",
            gridTemplateColumns: "repeat(2, 1fr)",
            justifyContent: "center",
            alignContent: "start",
          }}
        >
          <FormSelect2
            size="normal"
            value={formik.values.receives}
            defaultValue={payment.receives}
            error={formik.errors.receives}
            helperText={formik.errors.receives}
            fullWidth
            name="receives"
            onChange={formik.handleChange}
            options={users}
            label={"Recibe"}
          />
          <FormSelect2
            size="normal"
            value={formik.values.do}
            /* value={formik.values.clientType}
          error={formik.errors.clientType}
          helperText={formik.errors.clientType} */
            fullWidth
            name="do"
            onChange={formik.handleChange}
            options={users}
            label={"Realiza"}
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            /* gridTemplateColumns: "60% 40%", */
            width: "100%",
            bgcolor: "beige",
            p: 0,
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs} style={{}}>
            <DemoContainer
              fullWidth
              components={["DateTimePicker"]}
              sx={{
                /* bgcolor: "purple", */

                overflow: "hidden",
                p: 0,
                display: "grid",
              }}
            >
              <DateTimePicker
                size="normal"
                value={value}
                error={formik.errors.delivery}
                helperText={formik.errors.delivery}
                //onChange={(newValue) => setfield (newValue)}
                onChange={(e) => formik.setFieldValue("delivery", e)}
                timezone="America/Bogota"
                label={"Fecha Entrega"}
                name={"delivery"}
                format="DD/MM/YYYY, h:mma"
                slotProps={{
                  textField: {
                    size: "normal",
                    m: 0,

                    overflow: "hidden",
                  },
                  div: { backgroundColor: "orange" },
                  "& .MuiFormControl": { backgroundColor: "brown" },
                }}
                sx={{
                  padding: 0,

                  stack: { p: 0, overflow: "hidden" },
                  textField: {},
                  input: {
                    color: "text.main",

                    p: 0,
                    pl: 1.5,
                    pt: 1.5,
                    textAlign: "left",
                    height: 45,
                  },

                  button: {
                    color: "primary.main",

                    m: 0,
                    borderRadius: "50%",
                  },

                  div: {
                    height: "100%",
                    padding: 0,
                  },

                  svg: { transform: "scale(0.7)" },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
        <Box sx={{}}>
          <TextField
            name="comments"
            multiline
            rows={4}
            value={formik.values.comments}
            onChange={formik.handleChange}
            fullWidth
            label={"Observaciones"}
            type="text"
          />
        </Box>

        {/*  <Factura targetRef={targetRef} /> */}
      </Stack>
      <Stack
        spacing={1}
        direction={"row"}
        sx={{
          width: "100%",
          alignItems: "center",
          display: "flex",

          justifyContent: "space-between",
          m: 0,
        }}
      >
        <Grid
          item
          sx={{
            gap: 2,
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Button
            onClick={clearCart}
            //startIcon={<ClearOutlinedIcon />}
            sx={{ width: 40, height: 55, m: 0 }}
            // variant="secondary"
            variant="secondary-outlined"
          >
            <ClearOutlinedIcon />
            {/* Cancelar */}
          </Button>
          {/* <Link
              to={
                formik.errors.payment ||
                formik.errors.receives ||
                formik.errors.delivery
                  ? ""
                  : "/factura"
              }
            > */}
          <Button
            disabled={formik.errors.payment}
            onClick={handleAddData}
            startIcon={<PaymentsOutlinedIcon />}
            sx={{ color: "white", width: 270, height: 55 }}
            variant="prime"
          >
            Pagar
          </Button>
          {/*  </Link> */}
        </Grid>
      </Stack>
      <Modal
        sx={{
          display: "flex",
          justifySelf: "center",
          alignSelf: "center",

          "& .MuiModal-backdrop": {
            backgroundColor: "rgba(0, 0, 0, 0.7);",
          },
        }}
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Factura payMethod={payMethod} onClose={handleCloseModal} />
      </Modal>

      <Modal
        className="scale-up-center"
        sx={{
          display: "flex",
          justifySelf: "center",
          alignSelf: "center",

          "& .MuiModal-backdrop": {
            backgroundColor: "rgba(0, 0, 0, 0.7);",
          },
        }}
        open={openPay}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: 400,
            height: 350,
            bgcolor: "white",
            borderRadius: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ width: "80%", height: "80%" }}
            className="modal-box scale-up-center"
          >
            <Box
              sx={{
                borderBottom: `3px solid #f8f8f8`,
              }}
            >
              <ModalHeader title={"Abonar"} />{" "}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                label={"Abono"}
                name="payment"
                value={formik.values.payment}
                onChange={formik.handleChange}
              />
              <FormSelect2
                size="normal"
                value={formik.values.paymentMethod}
                defaultValue={payment.paymentMethod}
                error={formik.errors.paymentMethod}
                helperText={formik.errors.paymentMethod}
                name="paymentMethod"
                onChange={formik.handleChange}
                options={["Efectivo", "Transferencia"]}
                label={"Medio de pago"}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                gap: 2,
              }}
            >
              <Button
                sx={{ height: "90%", width: "100%" }}
                variant="secondary-outlined"
                onClick={() => setOpenPay(false)}
              >
                Cancelar
              </Button>
              <Button
                variant="prime"
                onClick={() => {
                  setPaymentAmount(formik.values.payment);
                  setPayMethod(formik.values.paymentMethod);
                  setOpenPay(false);
                }}
                sx={{ height: "90%", width: "100%" }}
              >
                Aceptar
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Stack>
  );
};

export default Payment;
