import { Outlet, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { customTheme } from "../Hooks/useCustomTheme";
import CartCounter from "../components/CartCounter";
import Logo from "../components/Logo";
import hexToRgba from "hex-to-rgba";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { makeStyles } from "@mui/material";
const style = makeStyles({
  center: {
    display: "flex",
    justifyContent: "center",
  },
});
const Root = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Grid2 container>
          <Grid2 item lg={12} sm={8} xs={12} md={10}>
            <nav className="nav-bar">
              <ul className="nav">
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
            </nav>
          </Grid2>
          <Grid2 item lg={4} sm={8} xs={8} md={8}>
            <main>
              <Outlet />
            </main>
          </Grid2>
        </Grid2>
      </div>
    </ThemeProvider>
  );
};

export default Root;
