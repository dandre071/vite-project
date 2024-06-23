import { useEffect, useState } from "react";
import { useShoppingCart } from "../store/shoppingCart";

export const useLocalStorage = (key, formValues) => {
  const [formData, setFormData] = useState(formValues);

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const [productItems, setProductItems] = useState(
    JSON.parse(localStorage.getItem(key)) || []
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(productItems));
  }, [key, productItems]);

  const submitForm = (e) => {
    e.preventDefault();
    setProductItems((prevProductItems) => [...prevProductItems, formData]);
    setFormData({
      producto: "",
      precio: "",
      cantidad: 1,
      acabado: "",
      cantAcabado: 1,
      descripcion: "",
      precioTotal: null,
    });
  };

  return {
    formData,
    setFormData,
    submitForm,
    handleInputChange,
    productItems,
  };
};

export const useProduct = (addItem, initialState) => {
  const [products, setProducts] = useState(initialState);

  const handleInputChange = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });

    console.log(products);
  };

  const totalCalc = () => {
    setProducts({
      ...products,
      itemTotalPrice: products.quantity * products.price,
    });
  };

  const handlerAdd = (e, handleClose) => {
    e.preventDefault();

    addItem({
      ...products,
    });

    //setProducts(initialState);
    resetForm();
    handleClose();
  };

  const resetForm = () => {
    setProducts(initialState);
  };

  return {
    products,
    setProducts,
    handleInputChange,
    handlerAdd,
    totalCalc,
    resetForm,
  };
};
