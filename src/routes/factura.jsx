import { Alert, Box, Button, Modal, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import { invoiceGrid, modal } from "../Styles/styles";
import useUsers from "../Hooks/useUsers";
import Logo from "../components/Logo";
import InvoiceItem from "../components/InvoiceComps/InvoiceItem";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import generatePDF from "react-to-pdf";
import { usePersonalData, useShoppingCart } from "../store/shoppingCart";
import { colPesos } from "../components/utils/configs";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { usePaymentData } from "../store/paymentData";

import { useReactToPrint } from "react-to-print";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { useState } from "react";
import SuccessModal from "../components/modals/SuccessModal";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Printer } from "lucide-react";
import PrintBtn from "../components/Buttons/PrintBtn";

const Factura = () => {
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
    dateStyle: "medium",
    timeStyle: "short",
    // timeZone: "Colombia/Bogotá",
  }).format(date);

  const [open, setOpen] = useState(false);
  function showModalHandler() {
    setShowModal(!showModal);
  }
  const clear = () => {
    paymentDataReset();
    clientData();
    cartReset();
    setOpen(false);
    navigate("/");
    {
      /* <Navigate to="/cart" replace={true} />; */
    }
  };
  const handlePrint = useReactToPrint({
    content: () => targetRef.current,
    documentTitle: `${client.name}.pdf`,
    copyStyles: true,
    //onAfterPrint: () => setOpen(true),
    onAfterPrint: () => clear(),
    onAfterPrint: () => setOpen(true),
    //onAfterPrint: () => navigate("/cart"),
  });

  const printFn = () => {
    handlePrint();
    //setShowModal(true);
  };

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
    gridTemplateColumns: "50px 80px",

    justifyContent: "center",
    alignItems: "center",
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    redirect("/");
  };
  return (
    <>
      <div className="margin-top" style={{ display: "flex", height: 1000 }}>
        {/* <Box
          className="circle center p-fixed"
          sx={{
            bgcolor: "secondary.main",
            width: 40,
            height: 40,
          }}
        >
          <Printer
            onClick={handlePrint}
            size={30}
            strokeWidth={1.5}
            absoluteStrokeWidth
            style={{ color: "white" }}
          />
        </Box> */}

        <form ref={targetRef}>
          <Stack
            sx={{
              width: "14cm",
              height: "21,6cm",
              bgcolor: "white",

              display: "grid",
              gridTemplateRows: "3.2cm 0.7cm 12cm 0.8fr .5cm",

              justifyContent: "center",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Stack
              className="invoice-header"
              sx={{
                width: "100%",
                height: "100%",
                //alignItems: "end",
                justifySelf: "center",
                display: "grid",

                justifyContent: "end",
                alignItems: "center",

                gridTemplateColumns: "35% 1fr ",
                // bgcolor: "red",
              }}
            >
              <Stack
                sx={{
                  //bgcolor: "red",
                  display: "grid",
                  height: "100%",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "start",
                  }}
                >
                  <Logo className="logo" />
                </Stack>
                <Typography
                  variant="h6"
                  //className="invoice-data fill"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifySelf: "start",
                    lineHeight: 1.2,
                    justifyContent: "center",
                    fontSize: 10,
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
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
                    sx={{ fontSize: 10, fontFamily: "roboto", fontWeight: 500 }}
                  >
                    {" "}
                    Barrio Baltazar (Turbo)
                  </Typography>
                </Typography>
              </Stack>

              <Box
                sx={{
                  display: "grid",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Stack
                  sx={{
                    display: "grid",

                    //bgcolor: "green",

                    padding: 0,
                    width: "100%",
                    height: "90%",
                    borderRadius: 1.8,
                    justifySelf: "end",

                    gridTemplateRows: "40% 60%",
                  }}
                >
                  <Stack
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "75% 1fr",

                      //bgcolor: "green",
                      width: "100%",
                      height: "90%",
                      justifyContent: "end",
                      justifySelf: "end",
                      alignItems: "end",
                      alignSelf: "start",
                      //border: `1.5px solid rgb(190, 190, 190)`,
                    }}
                  >
                    <Box
                      sx={{
                        transform: "scale(.9)",
                        display: "flex",
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
                      <Box>
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
                    <Box className="grid-rows-2-1fr" sx={{}}>
                      <Typography
                        sx={{
                          alignSelf: "end",
                          textTransform: "uppercase",
                          fontSize: 14,
                          fontWeight: 800,
                          textAlign: "right",
                          //bgcolor: "red",
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
                      bgcolor: "background.default",
                      // bgcolor: "background.default",
                      justifySelf: "end",
                    }}
                  >
                    <Box sx={{ width: "95%", height: "90%" }}>
                      <Box>
                        <Box>
                          <Typography
                            variant="h6"
                            className="invoice-label-client"
                            sx={{}}
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
                            display: "grid",
                            gridTemplateColumns: "70% 30%",
                          }}
                        >
                          <Box>
                            <Typography
                              className="invoice-label-client"
                              sx={{
                                // bgcolor: "red",
                                p: 0,
                                textTransform: "none",
                                fontSize: 11,
                              }}
                            >
                              Email
                            </Typography>
                            <Typography
                              style={{ textTransform: "none" }}
                              className="invoice-data-client"
                            >
                              {client.email}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography className="invoice-label-client">
                              Teléfono
                            </Typography>
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
                //bgcolor: "background.default",
                position: "relative",

                width: 480,
                height: ".7cm",
                alignSelf: "center",
                alignItems: "end",
                justifyContent: "center",

                //borderBottom: `2px solid black`,
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
              sx={{
                height: "100%",
                maxHeight: "100%",
                maxWidth: 490,
                width: "105%",
                // bgcolor: "orange",
                display: "flex",
                alignItems: "center",
                justifySelf: "center",

                //border: `1.5px solid rgb(190, 190, 190)`,
              }}
            >
              <Stack
                className="border-bottom-heavy "
                spacing={0.2}
                sx={{
                  //  bgcolor: "red",
                  width: "97%",
                  height: "100%",

                  display: "grid",
                  gridTemplateRows: "repeat(6,1fr)",
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
                // bgcolor: "blue",
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
                /*  className="fill" */
                sx={{
                  width: "100%",
                  height: "100%",

                  display: "grid",
                  gridTemplateColumns: "1fr",
                  placeItems: "center",
                  p: 0,
                  borderRadius: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: "95%",
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
                    <Box className="box-bottom">
                      <Typography className="invoice-label">
                        Revisa Valores
                      </Typography>
                      <Typography></Typography>
                    </Box>
                    <Box className="box-bottom">
                      <Typography className="invoice-label">Entrega</Typography>
                      <Typography></Typography>
                    </Box>
                  </Stack>
                  <Stack
                    sx={{
                      //bgcolor: "red",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      height: "95%",
                      justifyContent: "center",
                      alignSelf: "center",

                      gap: 1,
                    }}
                  >
                    <Stack className="box-bottom">
                      <Typography className={"invoice-label"}>
                        Firma y sello
                      </Typography>
                    </Stack>
                    <Stack className="box-bottom">
                      <Typography className={"invoice-label"}>
                        Firma y sello
                      </Typography>
                    </Stack>
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
                  //bgcolor: "#f0f4ff",
                  width: "100%",

                  display: "grid",
                  justifyContent: "center",
                  // border: `1.5px solid rgb(190, 190, 190)`,
                  alignItems: "start",
                  borderRadius: 2,
                  gridTemplateColumns: "1fr",
                }}
              >
                <Stack
                  sx={{
                    justifySelf: "right",
                    width: "95%",
                    height: "100%",
                    textAlign: "right",
                    display: "grid",
                    gridTemplateRows: "1fr ",
                    alignItems: "end",
                    // bgcolor: "cyan",
                  }}
                >
                  <Box
                    sx={{
                      ...box,
                      bgcolor: "background.dark",
                      height: 30,
                      /* borderRadius: 1, */

                      color: "text.main",
                    }}
                  >
                    <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
                      Total:
                    </Typography>

                    <Typography sx={{ fontSize: 14, fontWeight: 600, pr: 0.5 }}>
                      {colPesos.format(totalInvoice)}
                    </Typography>
                  </Box>
                  <Stack>
                    <Box sx={box}>
                      <Typography className={"invoice-label"}>
                        Abono 1:
                      </Typography>
                      <Typography
                        className={"invoice-label-payment"}
                        sx={{ pr: 0.5 }}
                      >
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
                          pr: 0.5,
                        }}
                      >
                        {colPesos.format(totalInvoice - paymentData.payment)}
                      </Typography>
                    </Box>
                    <Box
                      //className="border-bottom"
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
                  </Stack>
                  <Stack
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      flexDirection: "row",
                      mt: 1,
                    }}
                  >
                    <Stack
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      <Typography sx={{ fontSize: 10 }}>Efectivo</Typography>
                      <Box
                        className={"full-border"}
                        sx={{
                          width: 10,
                          height: 10,

                          borderRadius: 0.8,
                        }}
                      ></Box>
                    </Stack>
                    <Stack>
                      <Stack
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "end",
                          alignItems: "center",
                          gap: 0.5,
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ fontSize: 10 }}>
                          Transferencia
                        </Typography>
                        <Box
                          className={"full-border"}
                          sx={{
                            width: 10,
                            height: 10,

                            borderRadius: 0.8,
                          }}
                        ></Box>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
                {/*  <Typography className={"invoice-label"}>EFECTIVO</Typography> */}
              </Stack>
            </Stack>
            {/* <Typography
            variant="h6"
            //className="invoice-data fill"
            sx={{
              display: "flex",
              justifySelf: "center",
              width: "100%",
              justifyContent: "center",
              fontSize: 10,
            }}
          >
            Carrera 16 # 102-53 - Barrio Baltazar (Turbo) / 310 417 18 14
          </Typography> */}
          </Stack>
        </form>

        {/*   <Button
          style={{ position: "sticky", bottom: 0, alignSelf: "center" }}
          onClick={handlePrint}
        >
          pdf
        </Button> */}
        <div>
          {/*  <Button onClick={handleOpen}>Open modal</Button> */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="status-modal">
              <Box className="status-modal-box">
                <CheckCircleRoundedIcon
                  className="status-modal-icon"
                  sx={{ fontSize: 150 }}
                />
              </Box>
              <Box className="status-modal-box">
                <Typography
                  sx={{ fontSize: 40, fontWeight: 800 }}
                  className="status-modal-title"
                >
                  Éxito!
                </Typography>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 400, textAlign: "center" }}
                  className="status-modal-title"
                >
                  Todo salió bien y la información se agregó con normalidad.
                </Typography>
              </Box>
              <Link>
                <Button
                  variant="outlined"
                  sx={{
                    color: "greenyellow",
                    border: `2px solid greenyellow`,
                    textTransform: "capitalize",
                    borderRadius: 2,
                    height: 50,
                    width: 200,
                    fontSize: 20,
                    transform: "scale(1)",
                    "&:hover": {
                      border: `2px solid greenyellow`,
                      bgcolor: `greenyellow`,
                      color: "white",
                      transform: "scale(1.05)",
                    },
                  }}
                  onClick={clear}
                >
                  Finalizar
                </Button>
              </Link>
            </Box>
          </Modal>
        </div>
      </div>
      <PrintBtn handlePrint={handlePrint} style={{ mt: -100 }} />
    </>
  );
};

export default Factura;
