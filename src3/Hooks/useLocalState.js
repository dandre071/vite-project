import { useEffect, useState } from "react";

const useLocalStorage = () => {
  const [initialValues, setInitialValues] = useState(
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
  const [product, setProduct] = useState("");
  const [formValues, setFormValues] = useState(
    JSON.parse(localStorage.getItem("formValues")) || []
  );
  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);

  /*  const handleChange = (e) => {
    setInitialValues(() => ({
      ...initialValues,
      [e.target.name]: e.target.value,
    }));
  };
 */
  const handleChange = (e) => {
    setInitialValues(() => ({
      ...initialValues,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
    setInitialValues({
      producto: "",
      precio: "",
      cantidad: 1,
      acabado: "",
      cantAcabado: 1,
      descripcion: "",
      precioTotal: null,
    });
  };
  const handleRemoveProduct = (index) => {
    const newProducts = formValues.filter((_, i) => i !== index);
    setFormValues(newProducts);
  };

  return {
    formValues,
    initialValues,
    handleChange,
    submitForm,
    setInitialValues,
  };
};
export default useLocalStorage;
