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
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const totalPrice = useGetCartTotalPrice();
  const clearCart = useShoppingCart((state) => state.clearCart);
  const targetRef = useRef();
  const show = false;
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

  //console.log(paymentData);

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

  return (
    <Stack
      sx={{
        minHeight: "100%",
        width: 450,
        display: "grid",
        bgcolor: "#f9f9f9",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        gridTemplateRows: "15% 20% 1fr 20%",
        justifyContent: "center",
        alignItems: "center",

        // overflow: 'auto',
      }}
    >
      <Box>
        <ModalHeader title={"Resumen de compra"} />
        <PaidIcon onClick={() => setOpenPay(true)} />
      </Box>

      <Stack
        /*    className="border-bottom-heavy" */
        sx={{
          width: "95%",
          height: "100%",
          display: "grid",
          gridTemplateRows: "repeat(3, 30px)",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "start",
          p: 0,
          bgcolor: "#d1d1d1",
          borderRadius: 1.5,
        }}
      >
        {/* first item */}
        <Box sx={{ ...styles.paymentBox, p: 0, width: 370 }}>
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

          <TextField
            variant="standard"
            sx={{
              width: "auto",
              maxWidth: "100px",
              display: "flex",
              justifySelf: "end",
              textAlign: "right",
            }}
            error={
              personalData.billType === "Recibo" ? formik.errors.payment : ""
            }
            /* helperText={
                personalData.billType === "Recibo" && formik.errors.payment
              } */
            size="small"
            name="payment"
            onChange={formik.handleChange}
            fullWidth={false}
            value={formik.values.payment}
            inputProps={{
              style: { textAlign: "right", textJustify: "inter-word" },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  component="div"
                  disablePointerEvents
                >
                  <Typography sx={{ fontWeight: 600 }}>$</Typography>
                </InputAdornment>
              ),
            }}
            type="tel"
          />
        </Box>
        {/* end second item */}
        {/* third item */}
        <Box
          //className="border-bottom-heavy"
          sx={{
            ...styles.paymentBox,
            /*  mb: 2,
              pb: 1, */
          }}
        >
          {/*   <PaidIcon /> */}
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
      </Stack>
      <Stack
        spacing={0}
        sx={{
          minHeight: "80%",
          width: "95%",
          display: "grid",
          alignItems: "start",
        }}
      >
        {/* END */}
        <Box
          sx={{
            //bgcolor: "pink",
            gap: 1,
            display: "grid",

            height: "60px",
            gridTemplateColumns: "repeat(2, 1fr)",
            justifyContent: "center",
            alignContent: "center",
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
            gridTemplateColumns: "60% 40%",
            width: "100%",
            bgcolor: "beige",
            p: 0,
          }}
        >
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            style={{ width: "95%" }}
          >
            <DemoContainer
              fullWidth
              components={["DateTimePicker"]}
              sx={{
                /* bgcolor: "purple", */
                width: "100%",

                overflow: "hidden",
                p: 0,
                display: "grid",
                gridTemplateColumns: "80% 1fr",
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
                  overflow: "hidden",
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
                    right: -10,
                    bottom: 0,
                    width: 20,
                    height: 25,
                  },

                  div: {
                    display: "grid",
                    gridTemplateColumns: "160px 1fr",
                    width: 210,
                    height: "100%",
                    padding: 0,
                  },

                  svg: { transform: "scale(0.7)" },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
          <Box sx={{ width: "100%" }}>
            {" "}
            <FormSelect2
              width={"150px"}
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
        </Box>
        <TextField
          name="comments"
          multiline
          value={formik.values.comments}
          onChange={formik.handleChange}
          fullWidth
          label={"Observaciones"}
          type="text"
        />

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
        <Factura onClose={handleCloseModal} />
      </Modal>
      <Modal
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
        <Box sx={{ width: 400, height: 300, bgcolor: "white" }}>
          {" "}
          <TextField label={"Abono"} />
          <Button onClick={() => setOpenPay(false)}>Cancelar</Button>
        </Box>
      </Modal>
    </Stack>
  );
};

export default Payment;
