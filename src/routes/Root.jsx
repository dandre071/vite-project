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
        <header className="form-bg">
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
        </header>
        <main>
          <div></div>
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Root;
