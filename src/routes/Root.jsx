import { Outlet, Link } from "react-router-dom";
const Root = () => {
  return (
    <div style={{ width: "100vh", height: "100vh", backgroundColor: "red" }}>
      <ul>
        <li>
          <Link to={"/factura"}>Factura</Link>
        </li>
        <li>
          <Link to={"/client-data"}>Cliente</Link>
        </li>
        <li>
          <Link to={"/product-module"}>Producto</Link>
        </li>
      </ul>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
