import { Outlet, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { customTheme } from "../Hooks/useCustomTheme";
import CartCounter from "../components/CartCounter";
import Logo from "../components/Logo";
import hexToRgba from "hex-to-rgba";
const color = "fff";
const Root = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="container">
        <div className="nav-bar">
          <ul className="nav">
            <Link to={"/"}>
              <Logo className="logo" width={50} />
            </Link>
            <CartCounter />
            <li>
              <Link to={"/client-data"}>Cliente</Link>
            </li>
            {/*  <li>
            <Link to={"/factura"}>Factura</Link>
          </li> */}

            {/*    <li>
            <Link to={"/product-module"}>Producto</Link>
          </li> */}
            {/* <li>
            <Link to={"/cart"}>Cart</Link>
          </li> */}
            <li>
              <Link to={"/payment"}>Pay</Link>
            </li>
          </ul>
        </div>

        <div className="outlet" style={{ display: "flex", height: "auto" }}>
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Root;
