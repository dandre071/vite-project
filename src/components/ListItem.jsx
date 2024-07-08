import { Box, Divider, Grid, Typography } from "@mui/material";
import DeleteBtn from "./Buttons/DeleteBtn";
import { colPesos } from "./utils/configs";
import { themeColors } from "./utils/configs";
import { useShoppingCart } from "../store/shoppingCart";
import { listItemStyle, theme } from "../Styles/styles";
import { motion } from "framer-motion";
import ModalHeader from "./ModalHeader";
motion;
const ListItem = ({
  price,
  text,
  name,
  description,
  q,
  total,
  item,
  onClick,
}) => {
  const items = useShoppingCart((state) => state.items);

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          // bgcolor: "primary.light",
          position: "relative",
          display: "flex",
          // width: 600,
        }}
      >
        <Grid borderRadius={2} container sx={listItemStyle}>
          <Grid
            item
            sm={7.5}
            sx={{
              display: "grid",
              // bgcolor: "red",
              height: " 100%",
              p: 2,
              gap: 0.5,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "end" }}>
              <Typography
                style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: 1,
                  display: "flex",
                  color: themeColors.neutralDark,
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                {text}
              </Typography>
            </Box>
            <Typography
              style={{
                whiteSpace: "pre-wrap",
                lineHeight: 1.1,
                display: "grid",
                color: themeColors.neutralDark,
                fontSize: 14,
              }}
              sx={{}}
            >
              {description}
            </Typography>
          </Grid>

          <Grid
            item
            sm={1.5}
            sx={{
              // bgcolor: "green",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                //borderStyle: "solid",
                borderWidth: 3,
                //borderColor: "solid",
                bgcolor: "primary.main",
                width: "100%",
                height: 40,
                borderRadius: 2,
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: 900,
                  p: 0,
                }}
              >
                {q}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            sm={3}
            sx={{
              display: "flex",
              justifyContent: "end",
              //  bgcolor: "orange",
              pr: 1,
              //background: "palette.secondary.main",
              alignItems: "center",
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontSize: 22,
                fontWeight: 700,
                color: "text.main",
                textAlign: "right",
              }}
            >
              {`${colPesos.format(total)}`}
            </Typography>
          </Grid>
        </Grid>
      </Box>{" "}
      <Grid
        sx={{
          position: "relative",
          top: 28,
          p: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DeleteBtn
          onClick={onClick}
          sx={{
            fontSize: 30,
            // color: "secondary.main",
            color: "white",
            bgcolor: "secondary.main",
            borderRadius: "50%",

            "&:hover": {
              cursor: "pointer",
              bgcolor: "secondary.dark",
            },
          }}
        />
      </Grid>
    </Box>
  );
};

export default ListItem;
