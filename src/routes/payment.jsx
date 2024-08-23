import { Box, Button, Stack, Typography } from "@mui/material";
import { colPesos } from "../components/utils/configs";
import { useGetCartTotalPrice } from "../Hooks/hooks";
import { useShoppingCart } from "../store/shoppingCart";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Payment = () => {
  const totalPrice = useGetCartTotalPrice();
  const clearCart = useShoppingCart((state) => state.clearCart);
  return (
    <div>
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
          <Button
            startIcon={<ShoppingCartOutlinedIcon />}
            sx={{ color: "white", width: 400, height: 55 }}
            variant="prime"
          >
            Finalizar
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default Payment;
