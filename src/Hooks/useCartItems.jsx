import { Box, Button, Grid } from "@mui/material";

import { Link } from "react-router-dom";
import NextBtn from "../components/Buttons/NextBtn";
import { useShoppingCart } from "../store/shoppingCart";
import { BackBtn } from "../components/Buttons/BackBtn";

const NavBtn = ({ pathNext, pathBack, display }) => {
  const items = useShoppingCart((state) => state.items);
  return (
    <Grid
      item
      sx={{
        height: 70,
        display: "flex",
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        // borderTop: "1px solid black",
      }}
    >
      {/* <Link to={"/product-module"}>
        <Button
          variant="primary"
          sx={{ height: "80%" }}
          //onClick={handleSubmit}
          startIcon={<NavigateBeforeIcon />}
        >
          Producto
        </Button>
      </Link> */}
      <Box>
        <Link to={pathBack}>
          <BackBtn className={"arrow-btn"} />
        </Link>
      </Box>
      <Box sx={{ display: display }}>
        {items.length > 0 ? (
          <Link to={pathNext}>
            <NextBtn className={"arrow-btn"} />
          </Link>
        ) : (
          <NextBtn className={"disabled-btn"} />
        )}
      </Box>
    </Grid>
  );
};

export default NavBtn;
