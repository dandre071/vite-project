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
import { useRef } from "react";
import generatePDF from "react-to-pdf";
import Factura from "./factura";
import NavBtn from "../Hooks/useCartItems";
import { modal } from "../Styles/styles";
import FormSelect2 from "../components/Forms/FormSelect2";
import { Form, useFormik } from "formik";
import { PersonSchema } from "../components/Validations";
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

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Bogota");
const Payment = () => {
  const client = usePersonalData((state) => state.personalData);
  const totalPrice = useGetCartTotalPrice();
  const clearCart = useShoppingCart((state) => state.clearCart);
  const targetRef = useRef();
  const show = false;
  const items = useShoppingCart((state) => state.items);
  const totalPayment = colPesos.format(totalPrice);
  const [date, setDate] = useState();
  const [value, setValue] = useState();

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
    validationSchema: PersonSchema,

    // onSubmit: handleSubmit,
  });
  const handleDate = () => {
    (newValue) => setDate(newValue);
    formik.setValues({ ...formik.values, delivery: newDate });
  };
  console.log(formik.values);
  /*  console.log(
    new Intl.DateTimeFormat("es-CO", {
      dateStyle: "short",
      timeStyle: "short",
      timeZone: "America/Bogota",
    }).format(formik.values.delivery)
  ); */
  const deliveryDate = formik.values.delivery["$d"] || new Date();
  console.log(deliveryDate);

  const newDateFormat = new Intl.DateTimeFormat("es-CO", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Bogota",
  }).format(deliveryDate);
  console.log(newDateFormat);
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
    <Stack
      sx={{
        ...modal,
        height: "550px",
        width: "500px",
        display: "grid",
        gridTemplateRows: "repeat(6, auto)",
        justifyContent: "center",
        // overflow: 'auto',
      }}
    >
      {" "}
      <ModalHeader title={"Resumen de compra"} />
      <Stack sx={{ width: "500px", display: "flex", justifyContent: "center" }}>
        <Box
          id="pay"
          sx={{
            bgcolor: "primary.light",
            m: 0,
            //borderRadius: 2,
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr",
            justifyContent: "center",
            width: "500px",
          }}
        >
          <Box sx={{ ...styles.paymentBox, width: 500 }}>
            <Typography
              sx={styles.payment}
            >{`Productos: (${items.length})`}</Typography>
            <Typography sx={{ ...styles.payment, textAlign: "right" }}>
              {totalPayment}
            </Typography>
          </Box>

          <Box sx={{ ...styles.paymentBox }}>
            <Typography sx={styles.paymentAmount}>{`Pago: `}</Typography>

            <TextField
              variant="standard"
              sx={{
                width: "80px",
                maxWidth: "100px",
                display: "flex",
                justifySelf: "end",
                textAlign: "right",
              }}
              error={formik.errors.payment}
              helperText={formik.errors.payment}
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
          <Box
            className="border-bottom-heavy"
            sx={{ ...styles.paymentBox, mb: 2, pb: 1 }}
          >
            <Typography sx={styles.paymentAmount}>{`Pendiente: `}</Typography>
            <Typography
              name={"pending"}
              onChange={formik.handleChange}
              sx={{ ...styles.paymentAmount, textAlign: "right" }}
            >
              {colPesos.format(totalPrice - formik.values.payment)}
            </Typography>
          </Box>
        </Box>
      </Stack>
      <Box
        sx={{
          bgcolor: "pink",
          gap: 1,
          display: "grid",
          width: "100%",
          gridTemplateColumns: "repeat(2, 1fr) 2fr",
        }}
      >
        <FormSelect2
          size="small"
          value={formik.values.clientType}
          error={formik.errors.clientType}
          helperText={formik.errors.clientType}
          fullWidth
          name="clientType"
          onChange={formik.handleChange}
          options={["a", "b", "c"]}
          label={"Recibe"}
        />
        <FormSelect2
          size="small"
          value={formik.values.clientType}
          error={formik.errors.clientType}
          helperText={formik.errors.clientType}
          fullWidth
          name="clientType"
          onChange={formik.handleChange}
          options={["a", "b", "c"]}
          label={"Realiza"}
        />
        {/* <FormInputDate
            value={formik.values.delivery}
            name="delivery"
            onChange={formik.handleChange}
            label={"Fecha Entrega"}
            
          /> */}
        {/* <DatePicker
            onChange={(newValue) => setValue(newValue)}
            value={value}
            name={"delivery"}
          /> */}

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateTimePicker"]}>
            <DateTimePicker
              size="small"
              value={value}
              //onChange={(newValue) => setfield (newValue)}
              onChange={(e) => formik.setFieldValue("delivery", e)}
              timezone="America/Bogota"
              label={"Fecha Entrega"}
              name={"delivery"}
              format="DD/MM/YYYY, h:mma"
              slotProps={{ textField: { size: "small", m: 0 } }}
              sx={{
                textField: { size: "small", width: 200 },
                input: {
                  color: "text.main",

                  pr: 0,
                  m: 0,
                  textAlign: "right",
                },
                button: { color: "primary.main", p: 0.5, m: 0, left: 40 },
                div: {
                  width: 200,
                  pl: 0.5,
                  m: 0,
                },
                svg: { transform: "scale(0.6)" },
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Box>
      <TextField
        //onBlur={formik.handleBlur}
        //error={formik.errors.email}
        // helperText={formik.errors.email}
        /* value={formik.values.email} */
        name="comments"
        multiline
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
          width: 550,
          pt: 1,
          pb: 2,

          display: "flex",
          //bgcolor: "yellow",
          // alignItems: "end",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={clearCart}
          //startIcon={<ClearOutlinedIcon />}
          sx={{ width: 30, height: 55 }}
          // variant="secondary"
          variant="secondary-outlined"
        >
          <ClearOutlinedIcon />
          {/* Cancelar */}
        </Button>

        <Grid
          item
          sx={{
            height: 70,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to={"/factura"}>
            <Button
              //onClick={() => generatePDF(targetRef, { filename: "page.pdf" })}
              startIcon={<ShoppingCartOutlinedIcon />}
              sx={{ color: "white", width: 400, height: 55 }}
              variant="prime"
            >
              Finalizar
            </Button>
          </Link>
          {/* <Link to={"/payment"}>
              <Button
                variant="primary"
                sx={{ height: "80%" }}
                //onClick={handleSubmit}
                endIcon={<NavigateNextIcon />}
              >
                Pagar
              </Button>
            </Link> */}
        </Grid>
      </Stack>
      <NavBtn pathBack={"/cart"} pathNext={""} display={"none"} />
      {/*  <Factura targetRef={targetRef} /> */}
    </Stack>
  );
};

export default Payment;
