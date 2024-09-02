import { Outlet, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { customTheme } from "../Hooks/useCustomTheme";
import CartCounter from "../components/CartCounter";
import Logo from "../components/Logo";
const Root = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div
        style={{
          backgroundColor: "rgba(47, 4, 145, .8)",
          width: "100vw",
          top: 0,
          left: 0,
          position: "fixed",
          zIndex: 1000,
          justifyContent: "center",
          backdropFilter: "blur(20px)",
        }}
      >
        <ul
          style={{
            width: "70%",
            height: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
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

      <div style={{ display: "flex", height: "auto" }}>
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

export default Root;
