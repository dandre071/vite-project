import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage.jsx";
import Factura from "./routes/factura.jsx";
import ClientData from "./routes/client-data.jsx";
import ProductModule from "./routes/product-module.jsx";
import Cart from "./routes/cart.jsx";
import Payment from "./routes/payment.jsx";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./Hooks/useCustomTheme.jsx";

export const routes = [
  { path: "/", element: <Root />, name: "Home" },
  { path: "/client-data", element: <ClientData />, name: "Datos del cliente" },
  {
    path: "/product-module",
    element: <ProductModule />,
    name: "Producto",
  },
  {
    path: "/cart",
    element: <Cart />,
    name: "Carrito",
  },
  {
    path: "/payment",
    element: <Payment />,
    name: "Pagar",
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [...routes],
  },
]);
/* ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
