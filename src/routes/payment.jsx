import {
  Box,
  Button,
  Grid,
  InputAdornment,
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
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Bogota");
const Payment = () => {
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
      mb: 2,
      borderBottom: `1.5px solid background.dark`,
    },
  };
  return (
    <Stack sx={{}}>
      <Stack
        className="form-bg"
        spacing={0}
        sx={{
          ...modal,
          height: "450px",
          width: "500px",
          display: "grid",
          gridTemplateRows: "50px 60px 20px 40px)",
          justifyContent: "center",
          alignItems: "center",

          pr: 5,
          pl: 5,

          // overflow: 'auto',
        }}
      >
        <ModalHeader title={"Resumen de compra"} />
        <Stack
          className="border-bottom-heavy"
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateRows: "repeat(3, 30px)",
            justifyContent: "center",
            p: 0,
            //bgcolor: "green",
          }}
        >
          {/* first item */}
          <Box sx={{ ...styles.paymentBox, width: 500, p: 0 }}>
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
              helperText={
                personalData.billType === "Recibo" && formik.errors.payment
              }
              /* value={formik.values.email} */
              size="small"
              name="payment"
              onChange={formik.handleChange}
              fullWidth={false}
              // defaultValue={localStore.email}
              // label={"Email"}
              value={formik.values.payment}
              inputProps={{
                style: { textAlign: "right", textJustify: "inter-word" },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    component="div"
                    style={{ paddingLeft: "-14px" }}
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
        {/* END */}
        <Box
          sx={{
            //bgcolor: "pink",
            gap: 1,
            display: "grid",
            width: "100%",
            height: "60px",
            gridTemplateColumns: "repeat(2, 130px) 220px",
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

          <Box sx={{}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DateTimePicker"]}
                sx={{ display: "grid", width: 300 }}
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
                      width: 200,
                    },
                  }}
                  sx={{
                    stack: {},
                    textField: {},
                    input: {
                      color: "text.main",
                      // bgcolor: "green",
                      pr: 0,
                      m: 0,
                      textAlign: "right",
                    },
                    button: {
                      color: "primary.main",
                      p: 1,
                      m: 0,
                      borderRadius: "50%",
                      left: 190,
                      bottom: 40,
                      width: 20,
                      height: 20,
                    },

                    div: {
                      display: "grid",
                      gridTemplateColumns: "170px",
                      width: 220,
                      //bgcolor: "green",

                      m: 0,
                    },
                    svg: { transform: "scale(0.6)" },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
        </Box>
        <TextField
          //onBlur={formik.handleBlur}
          //error={formik.errors.email}
          // helperText={formik.errors.email}
          /* value={formik.values.email} */
          name="comments"
          multiline
          value={formik.values.comments}
          onChange={formik.handleChange}
          fullWidth
          //defaultValue={localStore.email}
          label={"Observaciones"}
          type="text"
        />

        <Stack
          spacing={1}
          direction={"row"}
          sx={{
            // borderTop: "1px solid grey",
            width: "100%",
            alignItems: "center",
            display: "flex",
            //bgcolor: "yellow",
            // alignItems: "end",
            justifyContent: "space-between",
            m: 0,
          }}
        >
          <NavBtn
            backText={"Compras"}
            pathBack={"/cart"}
            pathNext={""}
            displayNext={"none"}
          />
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
            <Link
              to={
                formik.errors.payment ||
                formik.errors.receives ||
                formik.errors.delivery
                  ? ""
                  : "/factura"
              }
            >
              <Button
                disabled={formik.errors.payment}
                onClick={handleAddData}
                startIcon={<PaymentsOutlinedIcon />}
                sx={{ color: "white", width: 250, height: 55 }}
                variant="prime"
              >
                Pagar
              </Button>
            </Link>
          </Grid>
        </Stack>

        {/*  <Factura targetRef={targetRef} /> */}
      </Stack>
    </Stack>
  );
};

export default Payment;
