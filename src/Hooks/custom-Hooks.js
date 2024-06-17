import { useEffect, useState } from "react";

export const useHandleInputChange = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    setFormData(() => ({
      ...initialValues,
      [e.target.name]: e.target.value,
    }));
    console.log(initialValues);
  };
  return { formData, setFormData, handleChange };
};

export const useFormData = (initialValues, e) => {
  const [formData, setFormData] = useState(initialValues);
  //const [productItems, setProductItems] = useState(formData);

  const newFormData = setFormData(() => ({
    ...initialValues,
    [e.target.name]: e.target.value,
  }));

  return { formData, newFormData };
};

function getStorageValue(key, defaultValue) {
  const initialValue = localStorage.getItem(key);
  return initialValue ? JSON.parse(initialValue) : defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
