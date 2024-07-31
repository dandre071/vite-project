import {
  Box,
  Button,
  Divider,
  Grid,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteBtn from "./Buttons/DeleteBtn";
import { colPesos } from "./utils/configs";
import { themeColors } from "./utils/configs";
import { useShoppingCart } from "../store/shoppingCart";
import { listItemStyle, theme } from "../Styles/styles";
import { motion } from "framer-motion";
import ModalHeader from "./ModalHeader";
import { customTheme } from "../Hooks/useCustomTheme";
import { object } from "yup";
import { uppercasing } from "./utils/helpers";
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
  handleChange,
  changeHandler,
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

        borderBottom: `2px solid ${customTheme.palette.background.dark}`,

        // bgcolor: "red",
        // alignItems: "center",
      }}
    >
      <Box
        sx={{
          // bgcolor: "primary.light",

          position: "relative",
          display: "grid",
          gridTemplateColumns: "610px 1fr",
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
              {uppercasing(text)}
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
              {`${colPesos.format(price)}`}
            </Typography>
            {/* <Typography
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
            </Typography> */}
            <Input
              // onChange={handleChange}
              inputProps={{
                min: 0,
                style: { textAlign: "right", padding: 0 },
              }}
              disableUnderline
              type="number"
              size="small"
              value={q}
              // onChange={}
              sx={{
                color: customTheme.palette.text.main,
                textAlign: "right",
                fontSize: 18,
                fontWeight: 700,
                p: 0,
              }}
              onChange={changeHandler}
            >
              {q}
            </Input>
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
              {uppercasing(description)}
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
                  fontWeight: 400,
                  color: "white",
                  fontSize: 14,
                  lineHeight: 1,
                  borderRadius: customTheme.shape.borderRadius - 2,
                  // borderRadius: 2,
                  bgcolor: "success.main",
                  p: 0.5,
                  pl: 1,
                  pr: 1,
                  boxSizing: "content-box",
                }}
              >
                {typeof finish === "string"
                  ? finish
                  : Array.from(finish).join(" + ")}
              </Typography>
            </Box>{" "}
          </Stack>{" "}
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
          {/*   <Button>edit</Button> */}
        </Box>
      </Box>{" "}
    </Box>
  );
};

export default ListItem;
