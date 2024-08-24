import { Box, Button, Grid, Stack, Typography } from "@mui/material";
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

const Payment = () => {
  const client = usePersonalData((state) => state.personalData);
  const totalPrice = useGetCartTotalPrice();
  const clearCart = useShoppingCart((state) => state.clearCart);
  const targetRef = useRef();
  const show = false;
  return (
    <div style={{ display: "grid" }}>
      <Stack
        sx={{
          display: "flex",
          alignSelf: "center",
          borderRadius: 3,
          bgcolor: "white",
          alignItems: "center",
          justifySelf: "center",
          justifyContent: "center",

          width: "100%",
          height: 150,

          boxShadow: 4,
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            // flexDirection: "row",
            // bgcolor: "green",
            justifyContent: "center",
            width: 480,
          }}
        >
          {/* <Badge
            badgeContent={items.length}
            color="secondary"
            sx={{ justifySelf: "center", alignSelf: "center" }}
          >
            <ShoppingCartOutlinedIcon
              sx={{ fontSize: 45, color: "primary.main" }}
            />
          </Badge> */}
          <Box
            sx={{
              //  bgcolor: "primary.light",
              height: 80,
              borderRadius: 2,
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "end",
            }}
          >
            {/* <Typography>{`Artículos: ${items.length}`}</Typography> */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                color: "text.main",
                fontSize: 20,
              }}
            >{`Total:`}</Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                color: "text.main",
                fontSize: 20,
              }}
            >{`${colPesos.format(totalPrice)}`}</Typography>
          </Box>
        </Stack>

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
      </Stack>{" "}
      {/*  <Factura targetRef={targetRef} /> */}
    </div>
  );
};

export default Payment;
