import { useEffect, useState } from "react";
import React from "react";

const useFetchProducts = () => {
  const [productList, setProductList] = useState(null);
  useEffect(() => {
    const getProductList = () => {
      fetch("http://localhost:3000/api/v1/impresosDB/")
        .then((res) => res.json())
        .then((data) => {
          setProductList(data);
          /*  setInvoiceNum(data.length); */
        });
    };
    getProductList();
  });
  return [productList];
};

export default useFetchProducts;
