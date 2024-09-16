import { Outlet, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { customTheme } from "../Hooks/useCustomTheme";
import CartCounter from "../components/CartCounter";
import Logo from "../components/Logo";
import hexToRgba from "hex-to-rgba";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Container, Stack } from "@mui/material";

const style = {};
const Root = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Stack>
        <Grid2 container sx={{ width: "100vw" }} gridTemplateRows="10vh 1fr">
          <Grid2
            direction={"row"}
            id="nav"
            item
            lg={12}
            sm={8}
            xs={12}
            md={10}
            sx={{ height: "100%", bgcolor: "red" }}
          >
            <ul style={{ display: "flex" }}>
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
            lg={4}
            sm={8}
            xs={8}
            md={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "90vh",
              width: "100vw",
              bgcolor: "blue",
            }}
          >
            <Container sx={{}}>
              <Outlet />
            </Container>
          </Grid2>
        </Grid2>
      </Stack>
    </ThemeProvider>
  );
};

export default Root;
