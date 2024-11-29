import { Box, Modal, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { invoiceGrid } from "../Styles/styles";
import useUsers from "../Hooks/useUsers";
import Logo from "../components/Logo";
import InvoiceItem from "../components/InvoiceComps/InvoiceItem";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { usePersonalData, useShoppingCart } from "../store/shoppingCart";
import { colPesos } from "../components/utils/configs";
import { useNavigate } from "react-router-dom";
import { usePaymentData } from "../store/paymentData";
import { useReactToPrint } from "react-to-print";
import { useState } from "react";
import PrintBtn from "../components/Buttons/PrintBtn";

import DeleteRoundedBtn from "../components/Buttons/DeleteRoundedBtn";
import SuccessModal from "../components/modals/SuccessModal";
import ConfirmModal from "../components/modals/ConfirmModal";
import { WarningRounded } from "@mui/icons-material";
import { customTheme } from "../Hooks/useCustomTheme";

import { add_zero } from "../components/utils/helpers";
import { endPoints } from "../../backend/endPoints";
const Factura = ({ openModal, onClose, payMethod }) => {
  const navigate = useNavigate();
  const [invoiceNum, setinvoiceNum] = useState(null);

  useEffect(() => {
    const getProductList = async () => {
      await fetch("http://localhost:3000/api/v1/impresosDB/")
        .then((res) => res.json())
        .then((data) => {
          setinvoiceNum(data.length + 1);
          console.log(data.length);
        });
    };
    getProductList();
  }, []);
  console.log(invoiceNum);
  const targetRef = useRef();
  const cart = useShoppingCart((state) => state.items);
  const paymentData = usePaymentData((state) => state.paymentData);
  const personalData = usePersonalData((state) => state.personalData)
  const paymentDataReset = usePaymentData((state) => state.clearData);
  const clientData = usePersonalData((state) => state.clearData);
  const cartReset = useShoppingCart((state) => state.clearCart);
const dataObject = {comments: paymentData.comments,
  deliveryDate: paymentData.delivery,
  does: paymentData.do,
  payment: paymentData.payment,
  paymentMethod: paymentData.paymentMethod,
  receives: paymentData.receives,
  billType: personalData.billType,
  clientType: personalData.clientType,
  email: personalData.email,
  clientName: personalData.name,
  clientPhone: personalData.phone,
  cart, 
total: cart.map((x)=> x.itemTotalPrice).reduce((a,b)=>a+b),
debt: cart.map((x)=> x.itemTotalPrice).reduce((a,b)=>a+b) - paymentData.payment

}
  console.log(dataObject)
  console.log(cart)
 /*  console.log(dataObject.cart.map((x)=> x.itemTotalPrice).reduce((a,b)=>a+b)) */
  const higlightColor = "#f4f4f4";
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const totalInvoice =
    cart.length > 0
      ? cart.map((item) => item.itemTotalPrice).reduce((a, b) => a + b)
      : 0;
  const client = usePersonalData((state) => state.personalData);
  const users = useUsers();
  const date = new Date();
  const fullDate = new Intl.DateTimeFormat("es-CO", {
    dateStyle: "short",
    timeStyle: "short",
    // timeZone: "Colombia/Bogotá",
  }).format(date);
/*   console.log(fullDate); */
  const [confirmOpen, setConfirmOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const clear = () => {
    createRegister();
    paymentDataReset();
    clientData();
    cartReset();
    setOpen(false);
    navigate("/");
  };
  const handlePrint = useReactToPrint({
    content: () => targetRef.current,
    documentTitle: `${client.name}.pdf`,
    copyStyles: true,
    //onAfterPrint: () => setOpen(true),
    onAfterPrint: () => {
      setConfirmOpen(true);
    },
    /*  onAfterPrint: () => clear(), */
    /*  onAfterPrint: () => setOpen(true), */
    //onAfterPrint: () => navigate("/cart"),
  });

  const phoneNumber = client.phone;

  const formatNum = phoneNumber
    ? phoneNumber.substr(0, 3) +
      " " +
      phoneNumber.substr(3, 3) +
      " " +
      phoneNumber.substr(6, 4)
    : "";

  const box = {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "30% 1fr",
    justifyContent: "center",
    alignItems: "center",
    p: 0,
  };
  const boxColor = "#DFE5F2";
  const title = cart.map((x) => `"${x.title}"`);
  const trabajos = cart.map(
    (x) =>
      `${x.name}${x.descolillado && x.descolillado}${
        x.descolillado && x.descolillado
      }`
  );
 
  console.log(trabajos);
  const record = {
    fecha_recibido: fullDate,
    fecha_entrega: paymentData.delivery,
    nombre: clientData.name,
    nit: null,
    telefono: clientData.phone,
    email: clientData.email,
    trabajo: `{${title.join(",")}}`,
    recibe: paymentData.receives,
    realiza: paymentData.do,
    total: totalInvoice,
    abono1: paymentData.payment,
    abono2: 0,
    resta: totalInvoice - paymentData.payment,
    estado: "asignado",
    observaciones: paymentData.comments,
    invoice_data: dataObject,
    tipo_cliente: client.clientType,
    tipo_recibo: client.billType,
  };

  console.log(record.invoice_data);
  const createRegister = () => {
    fetch(endPoints.records, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(record),
    }).then((respuesta) => respuesta.ok);
  };

  return (
    <>
      <div
        id="pdf"
        style={{
          display: "flex",
          width: "140mm",
          background: "white",
          justifyContent: "center",
          alignItems: "center",
          height: "216mm",
        }}
      >
        <form ref={targetRef} style={{}}>
          <Stack
            sx={{
              display: "grid",

              gridTemplateRows: "80px 0.7cm 13cm 1fr",

              justifyContent: "center",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Stack
              className="invoice-header"
              sx={{
                height: "100%",
                justifySelf: "center",
                display: "grid",
                width: "130mm",
                justifyContent: "end",
                alignItems: "center",

                gridTemplateColumns: "30% 1fr ",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  width: "100%",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                  }}
                >
                  <Logo className="logo" />{" "}
                  <Box className="grid-rows-2-1fr" sx={{}}>
                    <Typography
                      sx={{
                        alignSelf: "end",
                        textTransform: "uppercase",
                        fontSize: 14,
                        fontWeight: 800,
                        textAlign: "right",

                        width: "100%",
                        color: "primary.dark",
                      }}
                    >
                      {`${client.billType} / R${add_zero(invoiceNum, 5)}`}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      alignSelf: "center",

                      width: "100%",
                      height: "100%",
                    }}
                  ></Box>{" "}
                </Stack>
              </Stack>

              <Box
                sx={{
                  display: "grid",
                  alignItems: "center",
                  height: "100%",
                  alignItems: "start",
                  width: "100%",
                }}
              >
                <Stack
                  sx={{
                    display: "grid",
                    padding: 0,
                    width: "100%",
                    height: "100%",

                    alignItems: "start",
                    gridTemplateColumns: "35% 1fr",
                  }}
                >
                  <Stack
                    sx={{
                      display: "grid",

                      height: "100%",
                      justifyContent: "start",

                      alignItems: "start",
                    }}
                  >
                    <Box
                      sx={{
                        height: 77.97,
                        width: 120,
                        borderRadius: 1,
                        pl: 0.5,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h6"
                          className="invoice-label"
                          sx={{ textAlign: "left" }}
                        >
                          Recepción
                        </Typography>
                        <Typography
                          variant="h6"
                          className="invoice-data-date"
                          sx={{}}
                        >
                          {fullDate}
                        </Typography>
                      </Box>
                      <Box sx={{}}>
                        <Typography variant="h6" className="invoice-label">
                          Entrega
                        </Typography>
                        <Typography
                          variant="h6"
                          className="invoice-data-date"
                          sx={{}}
                        >
                          {typeof paymentData.delivery != "object"
                            ? paymentData.delivery
                            : ""}
                        </Typography>
                      </Box>
                    </Box>
                    {/* */}
                  </Stack>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "start",
                      alignItems: "start",
                    }}
                  >
                    <Stack
                      direction={"column"}
                      sx={{
                        justifyContent: "start",
                        alignItems: "start",
                        width: "97%",

                        pb: 0.5,
                        borderRadius: 1.5,
                        mt: 0.2,
                        bgcolor: boxColor,
                        alignSelf: "end",
                      }}
                    >
                      <Box
                        sx={{
                          width: "98%",
                          height: "95%",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h6"
                            className="invoice-label-client"
                            sx={{ textAlign: "right" }}
                          >
                            Cliente
                          </Typography>
                          <Typography
                            variant="h6"
                            className="invoice-data-client"
                            sx={{}}
                          >
                            {client.name}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "right",
                          }}
                        >
                          <Box>
                            <Typography
                              variant="h6"
                              className="invoice-data-client"
                            >
                              {formatNum}
                            </Typography>
                            <Typography
                              style={{ textTransform: "none" }}
                              className="invoice-data-client"
                            >
                              {client.email}
                            </Typography>
                          </Box>
                          <Box></Box>
                        </Box>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Stack>

            <Stack
              className="invoice-title-box"
              sx={{
                display: "grid",
                gridTemplateColumns: invoiceGrid,
                position: "relative",
                width: "100%",
                height: ".7cm",
                alignSelf: "center",
                alignItems: "end",
                justifyContent: "center",
              }}
            >
              <Typography className="invoice-title">Concepto</Typography>
              <Typography
                className="invoice-title"
                sx={{ justifySelf: "center" }}
              >
                Cant
              </Typography>
              <Typography
                className="invoice-title"
                sx={{ justifySelf: "right" }}
              >
                Precio
              </Typography>
              <Typography
                className="invoice-title"
                sx={{ justifySelf: "right" }}
              >
                Total
              </Typography>
            </Stack>
            <Stack
              className="border-bottom-heavy "
              sx={{
                height: "100%",
                maxHeight: "100%",
                maxWidth: 490,
                width: "100%",

                display: "flex",
                alignItems: "center",
                justifySelf: "center",
              }}
            >
              <Stack
                sx={{
                  width: "100%",
                  height: "auto",

                  display: "flex",

                  flexFlow: "wrap",
                  alignItems: "start",
                }}
              >
                {cart.map((item) => (
                  <InvoiceItem
                    key={item.id}
                    product={item.name}
                    orientation={item.orientation}
                    q={item.quantity}
                    price={colPesos.format(item.price)}
                    totalPrice={colPesos.format(item.itemTotalPrice)}
                    finish={item.finish}
                    description={item.description}
                    finishQ={item.finishQ > 1 ? item.finishQ : ""}
                  />
                ))}
              </Stack>
            </Stack>

            <Stack
              sx={{
                width: "100%",
                height: "100%",
                display: "grid",
                p: 0,
                borderRadius: 2.5,
                justifySelf: "center",
                gridTemplateColumns: "1fr 4cm",
                justifyContent: "end",
                alignItems: "start",
              }}
            >
              <Stack
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  gridTemplateColumns: "1fr",

                  p: 0,
                  borderRadius: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: "98%",
                    height: "100%",
                    display: "grid",
                    gridTemplateRows: ".5fr 1.5fr 1fr",
                    borderRadius: 2,
                    gap: 0.5,
                  }}
                >
                  <Stack
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4, 1fr)",
                      gap: 0.5,
                    }}
                  >
                    <Box>
                      <Typography variant="h6" className="invoice-label">
                        Recibe:
                      </Typography>
                      <Typography className="invoice-data">
                        {paymentData.receives}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography variant="h6" className="invoice-label">
                        Realiza:
                      </Typography>
                      <Typography className="invoice-data">
                        {paymentData.do}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography className="invoice-label">
                        Acabado:
                      </Typography>
                      <Typography></Typography>
                    </Box>
                    <Box>
                      <Typography className="invoice-label">
                        Entrega:
                      </Typography>
                      <Typography></Typography>
                    </Box>
                  </Stack>
                  <Stack
                    sx={{
                      display: "grid",

                      gridTemplateColumns: "30% 1fr",
                      height: "95%",
                      justifyContent: "center",
                      alignSelf: "center",

                      gap: 1,
                    }}
                  >
                    <Box>
                      <Typography variant="h6" className="invoice-label">
                        Revisa valores: <br />
                      </Typography>
                      <Box sx={{ height: 20 }}></Box>
                      <Typography variant="h6" className="invoice-label">
                        Fecha:
                      </Typography>
                    </Box>
                    <Stack sx={{ bgcolor: "#f5f5f5" }}>
                      <Box sx={{ height: "1cm" }}>
                        <Typography className={"invoice-label"}>
                          Observaciones: <br />
                          {paymentData.comments}
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                  <Box
                    className={"box-bottom"}
                    sx={{
                      height: "1cm",

                      bgcolor: "#C8D4F0",
                      bgcolor: "secondary.light",
                    }}
                  >
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "30px 300px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <WarningRounded
                        sx={{ fontSize: 24, color: "secondary.dark" }}
                      />
                      <Typography
                        style={{
                          color: customTheme.palette.secondary.dark,
                          fontWeight: 600,
                          fontSize: 12,
                        }}
                      >
                        Presente este recibo en Caja para entrega de su trabajo.
                        SIN RECIBO NO HAY ENTREGA.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Stack>

              <Stack
                sx={{
                  width: "100%",
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "start",
                  borderRadius: 2,
                  gridTemplateColumns: "1fr",
                }}
              >
                <Stack
                  sx={{
                    justifySelf: "right",
                    width: "100%",
                    height: "100%",
                    textAlign: "right",
                    display: "grid",
                    gridTemplateRows: "1fr ",
                    alignItems: "end",
                  }}
                >
                  <Box
                    sx={{
                      ...box,
                      bgcolor: boxColor,
                      height: 24,
                      color: "text.main",
                      width: "101%",
                    }}
                  >
                    <Typography sx={{ fontSize: 15, fontWeight: 800 }}>
                      Total:
                    </Typography>

                    <Typography
                      sx={{ fontSize: 15, fontWeight: 800, width: "98%" }}
                    >
                      {colPesos.format(totalInvoice)}
                    </Typography>
                  </Box>
                  <Stack>
                    <Box sx={box}>
                      <Typography className={"invoice-label"}>
                        Abono 1:
                      </Typography>
                      <Typography className={"invoice-label-payment"} sx={{}}>
                        {colPesos.format(parseInt(paymentData.payment))}
                      </Typography>
                    </Box>
                    <Box sx={{ ...box }} className="border-bottom">
                      <Typography className={"invoice-label"}>
                        Resta:
                      </Typography>
                      <Typography
                        className={"invoice-label-payment"}
                        sx={{
                          textAlign: "right",
                          alignSelf: "center",
                        }}
                      >
                        {colPesos.format(totalInvoice - paymentData.payment)}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        ...box,
                        bgcolor: "white",
                        height: 30,
                      }}
                    >
                      <Typography className={"invoice-label"}>
                        Abono 2:
                      </Typography>
                    </Box>

                    <Box
                      className="border-bottom"
                      sx={{
                        ...box,
                        bgcolor: "white",
                        height: "100%",
                      }}
                    >
                      <Typography className={"invoice-label"}>
                        Resta:
                      </Typography>
                    </Box>
                    <Box
                      className="border-bottom"
                      sx={{
                        ...box,
                        bgcolor: "white",
                        height: "100%",
                        mt: 1,
                      }}
                    >
                      <Typography className={"invoice-label"}>
                        Cajero:
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        height: 20,
                        bgcolor: boxColor,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 11,
                          textTransform: "uppercase",
                          fontWeight: 700,
                        }}
                      >
                        {payMethod}
                      </Typography>
                      {payMethod === "Transferencia" && (
                        <Box sx={{ width: "100%", height: 10 }}></Box>
                      )}
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "#949494",
                alignItems: "end",
              }}
            >
              <Typography
                sx={{
                  alignSelf: "start",
                  fontSize: 11,
                  fontFamily: "roboto",
                  fontWeight: 500,
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 10 }} /> 310 417 18 14 - Carrera
                16 # 102-53 - Barrio Baltazar (Turbo)
              </Typography>
            </Box>
          </Stack>
        </form>
        <div>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <SuccessModal onClick={clear} />
          </Modal>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <PrintBtn handlePrint={handlePrint} />
        <DeleteRoundedBtn onClick={onClose} />
      </div>
      <Modal
        open={confirmOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ConfirmModal onClick={clear} onClose={() => setConfirmOpen(false)} />
      </Modal>
    </>
  );
};

export default Factura;
