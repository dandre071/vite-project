import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { customTheme } from "./Hooks/useCustomTheme";

import useUsers from "./Hooks/useUsers";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import { useEffect, useState } from "react";
import useFetch from "./fetchHooks/useFetch";

function App() {
  return (
    <>
      {/*   {products.map((product) => (
        <p>{product.name}</p>
      ))} */}
    </>
  );
}
export default App;
