import { Box, Button, Grid, Tooltip } from "@mui/material";

import { Link } from "react-router-dom";
import NextBtn from "../components/Buttons/NextBtn";
import { useShoppingCart } from "../store/shoppingCart";
import { BackBtn } from "../components/Buttons/BackBtn";

const NavBtn = ({
  pathNext,
  pathBack,
  displayNext,
  displayBack,
  classname,
  pointer,
  backText,
  nextText,
}) => {
  const items = useShoppingCart((state) => state.items);

  pointer = pointer;
  return (
    <Grid
      item
      sx={{
        height: 70,
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        // borderTop: "1px solid black",
      }}
    >
      <Box>
        <Tooltip
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "secondary.main",
                "& .MuiTooltip-arrow": {
                  color: "secondary.main",
                },
              },
            },
          }}
          title={backText}
          placement="bottom"
          arrow
        >
          <Link to={pathBack}>
            <BackBtn className={"arrow-btn"} />
          </Link>
        </Tooltip>
      </Box>
      <Box sx={{ display: displayNext, pointerEvents: pointer }}>
        <Tooltip
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "secondary.main",
                "& .MuiTooltip-arrow": {
                  color: "secondary.main",
                },
              },
            },
          }}
          title={nextText}
          placement="bottom"
          arrow
        >
          <Link to={pathNext}>
            <NextBtn
              style={{ pointerEvents: pointer }}
              className={"arrow-btn"}
            />
          </Link>
          {/* {items.length > 0 && (
          
            <NextBtn className={"arrow-btn"} />
         
        )} */}
        </Tooltip>
      </Box>
    </Grid>
  );
};

export default NavBtn;
