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
            sm={8}
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
                //borderStyle: "solid",
                borderWidth: 3,
                //borderColor: "solid",
                bgcolor: "primary.main",
                width: 35,
                height: 35,
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
          <Grid
            sx={{
              top: 25,
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
        </Grid>
      </Box>
    </Box>
  );
};

export default ListItem;
