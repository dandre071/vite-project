import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
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
        display: "grid",
        p: 0,

        borderBottomStyle: "solid",
        borderBottomWidth: 2,

        // bgcolor: "red",
        // alignItems: "center",
      }}
    >
      <Box
        sx={{
          // bgcolor: "primary.light",

          position: "relative",
          display: "grid",
          gridTemplateColumns: "630px 1fr",
          //gridTemplateRows: "1fr 1fr",

          // width: 600,
        }}
      >
        <Stack borderRadius={2} sx={listItemStyle}>
          <Stack
            display={"grid"}
            gridTemplateColumns={"330px 100px 60px 120px"}
            direction={"row"}
            sx={{
              justifyContent: "start",
              alignItems: "end",
            }}
          >
            <Typography
              style={{
                whiteSpace: "pre-wrap",

                color: "text.main",
                fontSize: 18,
                fontWeight: 700,
                textAlign: "left",
              }}
            >
              {text}
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: 18,
                fontWeight: 700,
                color: "text.main",
                textAlign: "center",
              }}
            >
              {`${colPesos.format(total)}`}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: customTheme.palette.text.main,
                textAlign: "center",
                fontSize: 18,
                fontWeight: 700,
                p: 0,
              }}
            >
              {q}
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: 18,
                fontWeight: 700,
                color: "text.main",
                textAlign: "center",
              }}
            >
              {`${colPesos.format(total)}`}
            </Typography>{" "}
          </Stack>
          <Stack
            sx={{
              //bgcolor: "blue",
              p: 0,
              display: "grid",
              gridTemplateColumns: "490px 120px",
            }}
          >
            <Typography
              style={{
                whiteSpace: "pre-wrap",

                pl: 2,
                color: customTheme.palette.text.light,
                fontSize: 14,
                fontWeight: 300,
              }}
            >
              {text}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 300,
                  color: customTheme.palette.text.light,
                  fontSize: 14,
                  lineHeight: 1,
                  borderRadius: customTheme.shape.borderRadius - 2.5,
                  // borderRadius: 2,
                }}
              >
                {typeof finish === "string"
                  ? finish
                  : Array.from(finish).join(" + ")}
              </Typography>
            </Box>{" "}
          </Stack>{" "}
        </Stack>
        <Box>
          <DeleteBtn
            onClick={onClick}
            sx={{
              fontSize: 30,
              // color: "secondary.main",

              color: "white",
              bgcolor: "background.dark",
              borderRadius: "50%",

              "&:hover": {
                cursor: "pointer",
                bgcolor: "secondary.main",
              },
            }}
          />
        </Box>
      </Box>{" "}
    </Box>
  );
};

export default ListItem;
