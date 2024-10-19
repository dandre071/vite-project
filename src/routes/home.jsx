import React from "react";
import { useEffect, useState } from "react";
import useFetch from "../fetchHooks/useFetch";
import { Button } from "@mui/material";

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
  /* const productsPOST = useFetch("http://localhost:3000/api/v1/impresosDB", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 500,
      producto: "prueba",
      precio: 500000,
    }),
  }); */

  /* const productsPOST = fetch("http://localhost:3000/api/v1/impresosDB/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 500,
      producto: "prueba",
      precio: 500000,
    }),
  })
    .then((respuesta) => respuesta.json())
    .then((datos) => console.log(datos)); */
  /*  const [id, setId] = useState(products[0].length); */

  /* console.log(products[0].length); */
  console.log(users);
  console.log(laminado);
  console.log(materialPrice);
  console.log(vinylPrice);

  return (
    <>
      <Button
        onClick={
          () =>
            fetch("http://localhost:3000/api/v1/impresosDB/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: 139,
                producto: "prueba",
                precio: 500000,
              }),
            })
              .then((respuesta) => respuesta.ok)
              .then((datos) => console.log(datos))
          /*   .then(() => setId()) */
        }
      >
        crear
      </Button>
    </>
  );
};

export default Home;
