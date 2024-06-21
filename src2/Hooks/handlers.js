import { useState } from "react";


  const [formData, setFormData] = useState({
  producto: "",
  precio: "",
  cantidad: 1,
  acabado: "",
  cantAcabado: 1,
  descripcion: "",
  precioTotal: null,
});
const changeHandler = ()=> {
  
const handleChange = (event) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  }

 return (
)
}
