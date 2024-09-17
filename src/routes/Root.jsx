import { Outlet, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { customTheme } from "../Hooks/useCustomTheme";
import CartCounter from "../components/CartCounter";
import Logo from "../components/Logo";
import hexToRgba from "hex-to-rgba";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Container, Grid, Stack } from "@mui/material";

const style = {};
const Root = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Stack
        sx={{ minWidth: "400px", display: "flex", justifyContent: "center" }}
      >
        <Grid2 flexGrow={1} container sx={{ bgcolor: "white" }}>
          <Grid2
            lg={1.5}
            md={1}
            sm={1}
            xs={0}
            direction={"column"}
            id="nav"
            item
            sx={{ height: "100vh", bgcolor: "black" }}
          >
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <Link to={"/"}>
                <Logo className="logo" width={50} />
              </Link>
              <CartCounter />
              <li>
                <Link to={"/client-data"}>Cliente</Link>
              </li>

              <li>
                <Link to={"/payment"}>Pay</Link>
              </li>
            </ul>
          </Grid2>
          <Grid2
            item
            lg={10.5}
            md={11}
            sm={11}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",

              bgcolor: "#f2f2f2",
            }}
          >
            <Grid
              item
              lg={12}
              sx={{
                display: "flex",
                /* backgroundColor: "yellow", */
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Outlet />
            </Grid>
          </Grid2>
        </Grid2>
      </Stack>
    </ThemeProvider>
  );
};

export default Root;
