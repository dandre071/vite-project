import { Box, Stack, Typography } from "@mui/material";
import DeleteBtn from "./Buttons/DeleteBtn";
import { useShoppingCart } from "../store/shoppingCart";
import { motion } from "framer-motion";
import { Edit2Icon } from "lucide-react";
import { customTheme } from "../Hooks/useCustomTheme";
import EditIcon from "@mui/icons-material/Edit";
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
      style={{}}
    >
      <Box
        className="cart-item cart-grid"
        component={motion.div}
        sx={{
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
            width: "90%",
            justifyContent: "space-evenly",
            alignItems: "center",
            justifySelf: "end",
          }}
        >
          <EditIcon
            className="btn"
            onClick={editClick}
            sx={{ fontSize: 24, color: "primary.main" }}
          />
          <DeleteBtn onClick={onClick} />
        </Box>
      </Box>
    </motion.div>
  );
};

export default ListItem;
