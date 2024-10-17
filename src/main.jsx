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
import EditItem from "./routes/EditItem.jsx";
import ConfigPage from "./routes/ConfigPage.jsx";
import Home from "./routes/home.jsx";

export const routes = [
  { path: "/", element: <Home />, name: "Home" },
  {
    path: "/Configuraciones",
    element: <ConfigPage />,
    name: "Configurar",
  },
  {
    path: "/client-data/cart/:itemId",
    element: <EditItem />,
    name: "Editar",
  },

  {
    path: "/client-data",
    element: <ClientData />,
    name: "Datos del cliente",
  },
  {
    path: "/client-data/product-module",
    element: <ProductModule />,
    name: "Eligir productos",
  },
  {
    path: "/client-data/cart",
    element: <Cart />,
    name: "Carrito",
  },
  {
    path: "/client-data/payment",
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
  {
    path: "Configuraciones",
    element: <ConfigPage />,
    name: "Configurar",
  },
  {
    path: "/client-data",
    element: <ClientData />,
    name: "Datos del cliente",
    children: [
      {
        path: "/client-data/product-module",
        element: <ProductModule />,
        name: "Eligir productos",
      },
      {
        path: "/client-data/cart",
        element: <Cart />,
        name: "Carrito",
        children: [
          {
            path: "/client-data/cart/:itemId",
            element: <EditItem />,
            name: "Editar",
          },
        ],
      },

      {
        path: "/client-data/payment",
        element: <Payment />,
        name: "Pagar",
      },
    ],
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
