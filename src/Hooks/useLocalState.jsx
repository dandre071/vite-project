import { useRef } from "react";
import { createContext, useEffect, useState } from "react";

const useLocalStorage = () => {
  const [formData, setFormData] = useState(
    {
      producto: "",
      precio: "",
      cantidad: 1,
      acabado: "",
      cantAcabado: 1,
      descripcion: "",
      precioTotal: null,
    } || []
  );
  const [products, setProducts] = useState(() => {
    let initial = JSON.parse(localStorage.getItem("products"));
    return initial;
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    JSON.parse(localStorage.getItem("products"));
  }, [products]);

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  };

  function addProduct() {
    const newProduct = {
      ...formData,
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    return products;
  }

  /* function getProducts() {
    const newProducts = JSON.parse(localStorage.getItem("products"));
    setProducts(newProducts);
  } */

  /*  getItems(); */
  const handleSubmitData = (e) => {
    e.preventDefault();
    addProduct();
    return products;

    /* console.log(products); */
  };

  return {
    formData,
    handleChange,
    handleSubmitData,
    products,
    setProducts,
  };
};

export default useLocalStorage;
