import React from "react";
import { useEffect, useState } from "react";
import useFetch from "../fetchHooks/useFetch";
const Home = () => {
  /*  const [products, setProducts] = useState(""); */
  useEffect(() => {
    /* const fetchProducts = () => {
      const result = fetch("http://localhost:3000/api/v1/impresosDB");
       const resultJson = await JSON.parse(result);
      setProducts(result);
    };
    fetchProducts(); */
    /* fetch("http://localhost:3000/api/v1/impresosDB").then((response) =>
      response.json().then((data) => console.log(data))
    ); */
    /* fetch("http://localhost:3000/api/v1/impresosDB")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      }); */
  }, []);
  const products = useFetch("http://localhost:3000/api/v1/impresosDB");
  const users = useFetch("http://localhost:3000/api/v1/impresosDB/users");
  const laminado = useFetch("http://localhost:3000/api/v1/impresosDB/laminado");
  const materialPrice = useFetch(
    "http://localhost:3000/api/v1/impresosDB/precio-material"
  );
  const vinylPrice = useFetch(
    "http://localhost:3000/api/v1/impresosDB/precio-vinilos"
  );
  const productsPOST = useFetch("http://localhost:3000/api/v1/impresosDB", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 500,
      producto: "prueba",
      precio: 500000,
    }),
  });
  console.log(products);
  console.log(users);
  console.log(laminado);
  console.log(materialPrice);
  console.log(vinylPrice);

  return (
    <>
      {/*  {products.map((product) => (
        <p>{product.name}</p>
      ))} */}
    </>
  );
};

export default Home;
