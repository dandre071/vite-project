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
      <div
        style={{
          backgroundColor: hexToRgba(color, "0.8"),
          width: "70vw",
          //justifySelf: "center",
          top: 0,
          left: "50%",
          right: "50%",
          transform: "translate(-50%, 50%)",
          position: "fixed",
          zIndex: 1000,
          justifyContent: "center",

          backdropFilter: "blur(5px)",
          borderRadius: 10,
        }}
      >
        <ul
          style={{
            // width: "70%",
            height: 30,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
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
