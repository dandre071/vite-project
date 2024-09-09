import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useShoppingCart } from "../../store/shoppingCart";
import { Link, Navigate } from "react-router-dom";
import { Stack } from "@mui/material";
import { TriangleAlert } from "lucide-react";
import NextBtn from "../Buttons/NextBtn";
import { customTheme } from "../../Hooks/useCustomTheme";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function ProductLimit({ open }) {
  const cart = useShoppingCart();
  //const [open, setOpen] = React.useState(true);
  /*  const handleOpen = () => cart.length === 6 && setOpen(true);
  const handleClose = () => setOpen(false); */

  return (
    <div>
      <Modal
        open={open}
        //onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            sx={{
              display: "flex",
              width: "100%",
              height: "300px",

              // bgcolor: "background.light",
              borderRadius: 1.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* {<ProductLimit open={true} />} */}
            <TriangleAlert
              strokeWidth={1.75}
              size={90}
              color={customTheme.palette.secondary.main}
              style={{}}
            />
            <Typography variant="h4" sx={{ fontWeight: 900 }}>
              Carrito lleno!
            </Typography>
            <Typography sx={{ fontWeight: 400 }} variant="h7">
              No se pueden agregar más productos.{" "}
            </Typography>
          </Stack>
          {/*<Navigate to="/cart" replace={true} /> */}

          <Link to="/cart">
            <Button sx={{ height: 50 }} variant="prime">
              Ir a Compras
            </Button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
}
