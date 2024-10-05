import { Box, Stack, Typography } from "@mui/material";
import DeleteBtn from "./Buttons/DeleteBtn";
import { useShoppingCart } from "../store/shoppingCart";
import { motion } from "framer-motion";
import { Edit2Icon } from "lucide-react";
import { customTheme } from "../Hooks/useCustomTheme";

const ListItem = ({
  product,
  q,
  price,
  totalPrice,
  finish,
  description,
  finishQ,
  onClick,
  orientation,
  editClick,
}) => {
  const items = useShoppingCart((state) => state.items);
  const invoiceGrid = "1fr 1cm 3cm";

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x: 50 }}
    >
      <Box
        className="cart-item cart-grid"
        component={motion.div}
        sx={{
          borderRadius: 1,

          pt: 1,
          pb: 1,
          pl: 0.5,
          pr: 0.5,
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            className="invoice-content-data-l"
            sx={{ fontWeight: 600, fontSize: 15 }}
          >
            {`${product} - ${orientation}`}
          </Typography>
          <Typography
            className="secondary-color capitalize"
            sx={{
              fontSize: 12,
              fontWeight: 400,
              textAlign: "left",
              lineHeight: 1.2,
              height: "auto",
              alignContent: "start",
            }}
          >
            {description}
          </Typography>
        </Box>

        <div>
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {q}
          </Typography>
        </div>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              lineHeight: 1.2,
              display: "flex",
              justifyContent: "center",
              bgcolor: customTheme.palette.success.main,
              width: "auto",
              height: "auto",
              borderRadius: 1,
              alignItems: "center",
              pl: 0.5,
              pr: 0.5,
            }}
          >
            {finish && (
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  textAlign: "center",
                  color: "white",
                }}
              >
                {finishQ + finish}
              </Typography>
            )}
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{ fontSize: 15, fontWeight: 600, textAlign: "right" }}
          >
            {totalPrice}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Edit2Icon size={21} onClick={editClick} />
          <DeleteBtn onClick={onClick} />
        </Box>
      </Box>
    </motion.div>
  );
};

export default ListItem;
