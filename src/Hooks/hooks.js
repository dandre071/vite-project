import { useEffect, useState } from "react";

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
  return { formData, setFormData, submitForm, handleInputChange };
};
