import { Alert, Box, Button, Modal, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import { invoiceGrid, modal } from "../Styles/styles";
import useUsers from "../Hooks/useUsers";
import Logo from "../components/Logo";
import InvoiceItem from "../components/InvoiceComps/InvoiceItem";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { usePersonalData, useShoppingCart } from "../store/shoppingCart";
import { colPesos } from "../components/utils/configs";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { usePaymentData } from "../store/paymentData";
import { useReactToPrint } from "react-to-print";
import { useState } from "react";
import PrintBtn from "../components/Buttons/PrintBtn";
import { Columns } from "lucide-react";
import DeleteRoundedBtn from "../components/Buttons/DeleteRoundedBtn";
import SuccessModal from "../components/modals/SuccessModal";
import ConfirmModal from "../components/modals/ConfirmModal";

const Factura = ({ openModal, onClose, payMethod }) => {
  const navigate = useNavigate();

  const targetRef = useRef();
  const cart = useShoppingCart((state) => state.items);
  const paymentData = usePaymentData((state) => state.paymentData);
  const paymentDataReset = usePaymentData((state) => state.clearData);
  const clientData = usePersonalData((state) => state.clearData);
  const cartReset = useShoppingCart((state) => state.clearCart);

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

  const [confirmOpen, setConfirmOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const clear = () => {
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

              gridTemplateRows: "auto 0.7cm 13cm 1fr",

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

                gridTemplateColumns: "auto 1fr ",
              }}
            >
              <Stack
                sx={{
                  display: "grid",
                  gridTemplateRows: "60% 1fr",

                  width: "100%",
                  /* bgcolor: "red", */
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    /*  bgcolor: "pink", */
                  }}
                >
                  <Logo className="logo" />{" "}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      /*    bgcolor: "blue", */
                      height: "100%",
                    }}
                  >
                    <WhatsAppIcon sx={{ fontSize: 10 }} />{" "}
                    <Typography
                      sx={{
                        fontSize: 10,
                        fontFamily: "roboto",
                        fontWeight: 500,
                      }}
                    >
                      310 417 18 14 / Cra 16 # 102-53
                    </Typography>
                  </Box>{" "}
                  <Typography
                    sx={{
                      fontSize: 10,
                      fontFamily: "roboto",
                      fontWeight: 500,
                    }}
                  >
                    {" "}
                    Barrio Baltazar (Turbo)
                  </Typography>
                </Stack>
              </Stack>

              <Box
                sx={{
                  display: "grid",
                  alignItems: "center",
                  height: "100%",
                  alignItems: "start",
                }}
              >
                <Stack
                  sx={{
                    display: "grid",
                    padding: 0,
                    width: "100%",
                    height: "100%",

                    alignItems: "start",
                    gridTemplateRows: "40% 60%",
                    /*  bgcolor: "green", */
                  }}
                >
                  <Stack
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "75% 1fr",
                      width: "100%",
                      height: "100%",
                      justifyContent: "end",
                      justifySelf: "end",
                      alignItems: "start",
                    }}
                  >
                    <Box>
                      <Box
                        sx={{
                          transform: "scale(0.9)",
                          display: "flex",
                          bgcolor: "#f4f4f4",
                          p: 0.5,
                          borderRadius: 1,
                          flexDirection: "row",
                          justifyContent: "space-between",
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
                    </Box>
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
                        {client.billType}
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack
                    direction={"column"}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "97%",
                      height: "100%",
                      pb: 0.5,
                      borderRadius: 1.5,
                      /* bgcolor: "background.default",
                       */
                      justifySelf: "end",
                    }}
                  >
                    <Box sx={{ width: "100%", height: "90%" }}>
                      <Box>
                        <Box>
                          {/*  <Typography
                            variant="h6"
                            className="invoice-label-client"
                            sx={{}}
                          >
                            Cliente
                          </Typography> */}
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
                            display: "grid",
                            gridTemplateColumns: "1fr",
                          }}
                        >
                          <Box>
                            {/* <Typography
                              className="invoice-label-client"
                              sx={{
                                // bgcolor: "red",
                                p: 0,
                                textTransform: "none",
                                fontSize: 11,
                              }}
                            >
                              Email
                            </Typography> */}
                            <Typography
                              style={{ textTransform: "none" }}
                              className="invoice-data-client"
                            >
                              {client.email}
                            </Typography>
                          </Box>
                          <Box>
                            {/*  <Typography className="invoice-label-client">
                              Teléfono
                            </Typography> */}
                            <Typography
                              variant="h6"
                              className="invoice-data-client"
                            >
                              {formatNum}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Stack>
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
                  /*   placeItems: "center", */
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
                    <Box /* className="box-bottom" */>
                      <Typography className="invoice-label">
                        Acabado:
                      </Typography>
                      <Typography></Typography>
                    </Box>
                    <Box /* className="box-bottom" */>
                      <Typography className="invoice-label">
                        Entrega:
                      </Typography>
                      <Typography></Typography>
                    </Box>
                  </Stack>
                  <Stack
                    sx={{
                      display: "grid",
                      //gridTemplateColumns: "1fr 1fr",
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
                      <Typography variant="h6" className="invoice-label">
                        Fecha:
                      </Typography>
                    </Box>
                    <Stack className="box-bottom">
                      <Typography className={"invoice-label"}>Sello</Typography>
                    </Stack>
                    {/*   <Stack className="box-bottom">
                      <Typography className={"invoice-label"}>
                        Firma y sello
                      </Typography>
                    </Stack> */}
                  </Stack>
                  <Box className={"box-bottom"} sx={{ height: "1cm" }}>
                    <Typography className={"invoice-label"}>
                      Observaciones: <br />
                      {paymentData.comments}
                    </Typography>
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
                      bgcolor: "background.dark",
                      height: 30,
                      color: "text.main",
                      width: "101%",
                    }}
                  >
                    <Typography sx={{ fontSize: 13, fontWeight: 800 }}>
                      Total:
                    </Typography>

                    <Typography
                      sx={{ fontSize: 16, fontWeight: 800, width: "98%" }}
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
                        height: "100%",
                        bgcolor: "#f4f4f4",

                        mt: 1,
                      }}
                    >
                      <Typography>{payMethod}</Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
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
