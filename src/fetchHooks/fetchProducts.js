import { useEffect, useState } from "react";
export const [productList, setProductList] = useState(null);
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
