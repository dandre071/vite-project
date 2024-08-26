import { Outlet, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { customTheme } from "../Hooks/useCustomTheme";
import CartCounter from "../components/CartCounter";
const Root = () => {
  return (
    <ThemeProvider theme={customTheme}>
      {/* <div style={{ display: "grid", gridTemplateRows: "50px 1fr" }}> */}
      <div style={{ backgroundColor: "red" }}>
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
        //id="root-container"
        style={{
          backgroundColor: "#f2f2f2",
        }}
      >
        <div
          style={{
            width: "60vw",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ThemeProvider theme={customTheme}>
            <Outlet />
          </ThemeProvider>
        </div>
      </div>
      {/*    </div> */}
    </ThemeProvider>
  );
};

export default Root;
