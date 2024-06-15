import { useEffect, useState } from "react";
import { set } from "react-hook-form";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    useEffect(() => {
      try {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }
    });
  };
  const [formValues, setFormValues] = useState();

  /*  const handleChange = (e) => {
    setFormValues(() => ({
      ...formValues,
      [e.target.name]: e.target.value,
    }));
    console.log(formValues);
  }; */
  const submitForm = (e) => {
    e.preventDefault();
    setFormValues((prevFormValues) => [...prevFormValues, formData]);
    formData({
      producto: "",
      precio: "",
      cantidad: 1,
      acabado: "",
      cantAcabado: 1,
      descripcion: "",
      precioTotal: null,
    });
  };
  return [storedValue, setStoredValue, formValues, handleChange, submitForm];
}

export function useGetFormData({ form }) {
  const [formData, setFormData] = useState(form);
  const handleChange = (e) => {
    setFormData(() => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
    console.log(formData);
  };

  return [formData, setFormData, handleChange];
}
