import { Outlet, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { customTheme } from "../Hooks/useCustomTheme";
import CartCounter from "../components/CartCounter";
import Logo from "../components/Logo";

import { Box, Container, Grid, Stack } from "@mui/material";

const Root = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="grid-template">
        <div className="aside">
          <Link to={"/"}>
            <Box className="logo-container">
              <Logo className="logo" width={50} />
            </Box>
          </Link>
        </div>
        <div className={"nav-area"}>
          <ul>
            <CartCounter />
            <li>
              <Link to={"/client-data"}>Cliente</Link>
            </li>

            <li>
              <Link to={"/payment"}>Pay</Link>
            </li>
          </ul>
        </div>
        <div className={"main"}>
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Root;
