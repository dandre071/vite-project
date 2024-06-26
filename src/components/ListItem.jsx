import { Box, Divider, Grid, Typography } from "@mui/material";
import DeleteBtn from "./Buttons/DeleteBtn";
import { colPesos } from "./utils/configs";
import { themeColors } from "./utils/configs";
import { useShoppingCart } from "../store/shoppingCart";
import { listItemStyle } from "../Styles/styles";

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
  /* const [newItems, setNewItems] = useState(items); */
  // console.log(items);
  /* const handleRemove = (id) => {
    const newList = items.filter((item) => !item.id == id);
    console.log(newList);
  };
 */
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
        }}
      >
        <Grid borderRadius={2} container sx={listItemStyle}>
          <Grid
            item
            sm={7}
            sx={{
              display: "grid",
              // gridTemplateRows: "50px 40px",
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

            {/* <Grid sx={{ bgcolor: "pink", display: "grid", alignContent: "start" }}>
          <Typography
            style={{
              whiteSpace: "pre-wrap",
              lineHeight: 1,
              display: "grid",
              justifyContent: "end",
              alignItems: "end",
            }}
            sx={{ fontSize: 14 }}
          >
            esta es una prueba para ver como se rompe la linea
          </Typography>
        </Grid> */}
          </Grid>
          <Grid
            item
            sm={1}
            sx={{
              display: "block",
              alignContent: "center",

              /*  borderRightStyle: "solid",
              borderRightWidth: 2,
              borderColor: "primary.main", */
            }}
          >
            <Box
              sx={{
                bgcolor: themeColors.success,
                // borderStyle: "solid",
                //borderWidth: 1,
                color: "white",
                width: "90%",
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
                  fontSize: 20,
                  fontWeight: 800,
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
                fontWeight: 800,
                color: "black",
                textAlign: "right",
              }}
            >
              {`${colPesos.format(total)}`}
            </Typography>
          </Grid>
          <Grid
            item
            sm={1}
            sx={{
              display: "flex",
              p: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DeleteBtn
              onClick={onClick}
              sx={{
                fontSize: 35,
                color: themeColors.warning,
                "&:hover": {
                  cursor: "pointer",
                  // color: "red",
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
