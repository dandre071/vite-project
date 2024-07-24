import { Box, Divider, Grid, Typography } from "@mui/material";
import DeleteBtn from "./Buttons/DeleteBtn";
import { colPesos } from "./utils/configs";
import { themeColors } from "./utils/configs";
import { useShoppingCart } from "../store/shoppingCart";
import { listItemStyle, theme } from "../Styles/styles";
import { motion } from "framer-motion";
import ModalHeader from "./ModalHeader";
import { customTheme } from "../Hooks/useCustomTheme";
import { object } from "yup";
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
  finish,
  qFinish,
}) => {
  const items = useShoppingCart((state) => state.items);
  //const fin = finish.join(", ");
  // console.log(fin);
  //const finishText =
  return (
    <Box
      sx={{
        display: "flex",
        p: 0,
        height: 100,
        // bgcolor: "red",
        // alignItems: "center",
      }}
    >
      <Box sx={{}}>
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
                // height: " 100%",
                p: 2,
                gap: 0.5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "end",
                }}
              >
                <Typography
                  style={{
                    whiteSpace: "pre-wrap",
                    lineHeight: 1,
                    display: "flex",
                    color: "text.main",
                    fontSize: 20,
                    fontWeight: 800,
                  }}
                >
                  {text}
                </Typography>
              </Box>
              <Box
                sx={
                  {
                    /* display: "flex", alignItems: "end" */
                  }
                }
              >
                <Typography
                  style={{
                    whiteSpace: "pre-wrap",
                    lineHeight: 1,

                    color: customTheme.palette.text.light,
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {text}
                </Typography>
              </Box>
            </Grid>
            <Typography
              sx={{
                position: "absolute",
                //top: 10,
                right: 15,
                bottom: -10,
                bgcolor: "success.main",
                fontWeight: 500,
                color: "white",
                fontSize: 14,
                borderRadius: customTheme.shape.borderRadius - 2.5,
                // borderRadius: 2,
                p: 1,
                pt: 0,
                pb: 0,
              }}
            >
              {typeof finish === "string"
                ? finish
                : Array.from(finish).join(" - ")}
            </Typography>
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
                  bgcolor: "primary.light",
                  width: "80%",
                  height: 40,
                  borderRadius: 2,
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "primary.main",
                    textAlign: "center",
                    fontSize: 18,
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
                pr: 2,
                //background: "palette.secondary.main",
                alignItems: "center",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: 21,
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
        <DeleteBtn
          onClick={onClick}
          sx={{
            position: "relative",

            top: -95,

            right: -480,
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
      </Box>
    </Box>
  );
};

export default ListItem;
