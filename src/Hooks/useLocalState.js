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

  const [formValues, setFormValues] = useState(
    JSON.parse(localStorage.getItem("formValues")) || []
  );
  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);
  const handleChange = (e) => {
    e.preventDefault();
    setInitialValues(() => ({
      ...initialValues,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    /* e.preventDefault(); */
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

  /*return {
    <div className="App">
      <div>
        companyname
        <input
          name="companyname"
          value={initialValues.companyname}
          onChange={(e) =>
            setInitialValues({ ...initialValues, companyname: e.target.value })
          }
        />
      </div>
      <div>
        website
        <input
          value={initialValues.website}
          onChange={(e) =>
            setInitialValues({ ...initialValues, website: e.target.value })
          }
        />
      </div>
      <ul className="todo-list">
        {formValues.map((item, index) => (
          <li key={index}>
            {item.companyname}
            <button onClick={() => handleRemoveProduct(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={submitForm}>onSubmit </button>
    </div> 
    
  };*/
  return { formValues, initialValues, handleChange, submitForm };
};
export default useLocalStorage;
