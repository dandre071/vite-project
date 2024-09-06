import { Box, Button, Grid } from "@mui/material";

import { Link } from "react-router-dom";
import NextBtn from "../components/Buttons/NextBtn";
import { useShoppingCart } from "../store/shoppingCart";
import { BackBtn } from "../components/Buttons/BackBtn";

const NavBtn = ({ pathNext, pathBack, display, classname, pointer }) => {
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
        <Link to={pathBack}>
          <BackBtn className={"arrow-btn"} />
        </Link>
      </Box>
      <Box sx={{ display: display, pointerEvents: pointer }}>
        <Link to={pathNext}>
          <NextBtn style={{ pointerEvents: pointer }} className={classname} />
        </Link>
        {/* {items.length > 0 && (
          
            <NextBtn className={"arrow-btn"} />
         
        )} */}
      </Box>
    </Grid>
  );
};

export default NavBtn;
