import React from "react";
import { useEffect, useState } from "react";
import useFetch from "../fetchHooks/useFetch";
import { Button } from "@mui/material";
import Table from "../components/Forms/Table";

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
  const test = ["ldjfdfjdf", "kkjsjsjd", "llgfgoorkjr"];
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

  const createRegister = () => {
    fetch("http://localhost:3000/api/v1/impresosDB/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fecha_recibido: "24/10/2024",
        fecha_entrega: "28/10/2024",
        nombre: "prueba2",
        nit: 1234567890,
        telefono: 3206598822,
        email: "prueba@gmail.com",
        /* trabajo: '{"trabajo1","trabajo2"}', */
        trabajo: '{"value1", "value2"}',
        recibe: "diego",
        realiza: "diego",
        total: 12345,
        abono1: 1234,
        abono2: 0,
        resta: 234,
        estado: "Listo",
        observaciones: "fjfdkfjdkjfkdjf",
      }),
    })
      .then((respuesta) => respuesta.ok)
      .then((datos) => console.log(datos));
  };
  /*  useEffect(() => {
    const getProductList = () => {
      fetch("http://localhost:3000/api/v1/impresosDB/")
        .then((res) => res.json())
        .then((data) => {
          setProductList(data);
          setInvoiceNum(data.length);
        });
    };
    getProductList();
  }, []); */
  useEffect(() => {
    /* const createRegister = () => {
      fetch("http://localhost:3000/api/v1/impresosDB/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fecha_recibido: "24/10/2024",
          fecha_entrega: "26/10/2024",
          nombre: "prueba1",
          nit: 1234567890,
          telefono: 3206598822,
          email: "prueba@gmail.com",
          trabajo: ["trabajo1", "trabajo2"],
          recibe: "diego",
          realiza: "diego",
          total: 12345,
          abono1: 1234,
          abono2: 0,
          resta: 234,
          estado: "en espera",
          observaciones: "fjfdkfjdkjfkdjf",
        }),
      })
        .then((respuesta) => respuesta.ok)
        .then((datos) => console.log(datos));
   
    };
    createRegister(); */
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
      <Table />
      <Button onClick={createRegister}>crear</Button>
      <Button onClick={filteredList}>crear</Button>{" "}
    </>
  );
};

export default Home;
