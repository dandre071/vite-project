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
    <Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          width: 520,
        }}
      >
        <Grid borderRadius={2} container sx={listItemStyle}>
          <Grid
            item
            sm={7}
            sx={{
              display: "grid",

              height: " 100%",
              p: 1,
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
            sm={1}
            sx={{
              display: "block",
              alignContent: "center",
            }}
          >
            <Box
              sx={{
                borderStyle: "solid",
                borderWidth: 2,
                borderColor: themeColors.darkPrimary,
                color: themeColors.darkSecondary,

                height: 30,
                borderRadius: 1.5,
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: 700,
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

              alignItems: "center",
            }}
          >
            {/* <Divider orientation="vertical" width={2} /> */}
            <Typography
              variant="p"
              sx={{
                fontSize: 20,
                fontWeight: 700,
                color: "black",
                textAlign: "right",
              }}
            >
              {`${colPesos.format(total)}`}
            </Typography>
          </Grid>
          <Grid
            sx={{
              top: 20,
              left: 20,
              position: "relative",
              p: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DeleteBtn
              onClick={onClick}
              sx={{
                fontSize: 38,
                color: themeColors.warning,
                bgcolor: "white",
                borderRadius: "50%",

                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ListItem;
