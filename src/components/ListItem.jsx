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
        component={motion.div}
        sx={{
          display: "grid",
          gridTemplateColumns: "90% 1fr",
          border: "1px solid #f9f9f9",
          borderRadius: 1,
          bgcolor: "#f0f6ff",
          width: 600,
          pt: 1,
          pb: 1,
          pl: 0.5,
          pr: 0.5,
          alignItems: "center",
        }}
      >
        <Stack sx={{}}>
          <Stack
            sx={{
              // bgcolor: "#f7f7f7",
              display: "grid",
              gridTemplateColumns: invoiceGrid,
              borderRadius: 1.5,
              height: 40,
              alignItems: "center",
            }}
          >
            <Typography
              className="invoice-content-data-l"
              sx={{ fontWeight: 600, fontSize: 15 }}
            >
              {product}
            </Typography>
            <Typography
              sx={{ fontSize: 15, fontWeight: 600, textAlign: "center" }}
            >
              {q}
            </Typography>
            {/* <Typography
            sx={{ fontSize: 14, fontWeight: 600, textAlign: "right" }}
          >
            {price}
          </Typography> */}
            <Typography
              sx={{ fontSize: 15, fontWeight: 600, textAlign: "right" }}
            >
              {totalPrice}
            </Typography>
          </Stack>
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: "70% 1fr",
              height: "auto",
            }}
          >
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
                    Acabado: {`${finishQ} ${finish}`}
                  </Typography>
                )}
              </Box>
            </Box>
          </Stack>
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Edit2Icon onClick={onClick} />
          <DeleteBtn onClick={onClick} />
        </Box>
      </Box>
    </motion.div>
  );
};

export default ListItem;
