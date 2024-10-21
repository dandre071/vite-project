import React from "react";
import { useEffect, useState } from "react";
import useFetch from "../fetchHooks/useFetch";
import { Button } from "@mui/material";

const Home = () => {
  const [productList, setProductList] = useState(null);
  const [invoiceNum, setInvoiceNum] = useState(null);
  const [productFilter, setProductFilter] = useState(null);
  /* const products = useFetch("http://localhost:3000/api/v1/impresosDB"); */

  const users = useFetch("http://localhost:3000/api/v1/impresosDB/users");
  const laminado = useFetch("http://localhost:3000/api/v1/impresosDB/laminado");
  const materialPrice = useFetch(
    "http://localhost:3000/api/v1/impresosDB/precio-material"
  );
  const vinylPrice = useFetch(
    "http://localhost:3000/api/v1/impresosDB/precio-vinilos"
  );

  const getProductList = () => {
    fetch("http://localhost:3000/api/v1/impresosDB/")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
      });
  };

  const createProduct = () => {
    fetch("http://localhost:3000/api/v1/impresosDB/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        /*     id: 1223, */
        producto: "prueba3000",
        precio: 500000,
      }),
    })
      .then((respuesta) => respuesta.ok)
      .then((datos) => console.log(datos))
      .then(getProductList());
  };
  useEffect(() => {
    const getProductList = () => {
      fetch("http://localhost:3000/api/v1/impresosDB/")
        .then((res) => res.json())
        .then((data) => {
          setProductList(data);
          setInvoiceNum(data.length);
        });
    };
    getProductList();
  }, []);

  const filteredList = () => {
    const filterItem = productList.filter((product) => product.id === 1);
    setProductFilter(filterItem[0].producto);
  };
  /*  console.log(productFilter); */
  console.log(productList);
  console.log(invoiceNum);
  /*  console.log(products); */
  /*  console.log(users);
  console.log(laminado);
  console.log(materialPrice);
  console.log(vinylPrice); */

  return (
    <>
      <Button onClick={createProduct}>crear</Button>
      <Button onClick={filteredList}>crear</Button>{" "}
    </>
  );
};

export default Home;
