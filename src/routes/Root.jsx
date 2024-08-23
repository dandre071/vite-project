import { Outlet, Link } from "react-router-dom";
const Root = () => {
  return (
    <div style={{ width: "100vh", height: "100vh", backgroundColor: "red" }}>
      <ul>
        <li>
          <Link to={"/factura"}>Your Name</Link>
        </li>
        <li>
          <Link to={"/client-data"}>Your Name</Link>
        </li>
      </ul>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
