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
      <div flexGrow={1} className="grid-template" container>
        <div className="aside"></div>
        <div
          className={"nav-area"}
          sx={{}}
          /* id="nav" */
          item
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
        </div>
        <div
          className={"main"}
          item
          sx={{
            bgcolor: "#f2f2f2",
          }}
        >
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Root;
