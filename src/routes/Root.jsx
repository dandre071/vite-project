import { Outlet, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { customTheme } from "../Hooks/useCustomTheme";
import CartCounter from "../components/CartCounter";
const Root = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div style={{}}>
        <div
          style={{
            backgroundColor: "red",
            width: "70vw",
            top: 0,
            position: "fixed",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <CartCounter />
            <li>
              <Link to={"/client-data"}>Cliente</Link>
            </li>
            <li>
              <Link to={"/factura"}>Factura</Link>
            </li>

            <li>
              <Link to={"/product-module"}>Producto</Link>
            </li>
            <li>
              <Link to={"/cart"}>Cart</Link>
            </li>
            <li>
              <Link to={"/payment"}>Pay</Link>
            </li>
          </ul>
        </div>

        <div
          style={{
            width: "70vw",
            height: 700,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ThemeProvider theme={customTheme} style={{ display: "flex" }}>
            <Outlet />
          </ThemeProvider>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Root;
