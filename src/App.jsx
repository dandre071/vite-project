import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { customTheme } from "./Hooks/useCustomTheme";

import useUsers from "./Hooks/useUsers";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetch("http://localhost:3000/api/v1/impresosDB");
      const resultJson = await result.json();
      setProducts(resultJson);
    };
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <>
      {products.map((product) => (
        <p>{product.name}</p>
      ))}
    </>
  );
}
export default App;
