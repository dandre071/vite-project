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
  console.log(products);
  console.log(users);
  return (
    <>
      {/*  {products.map((product) => (
        <p>{product.name}</p>
      ))} */}
    </>
  );
};

export default Home;
