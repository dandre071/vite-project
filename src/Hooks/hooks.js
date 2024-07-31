import { useEffect, useState } from "react";
import { useShoppingCart } from "../store/shoppingCart";
import { v4 as uuidv4 } from "uuid";
import { object, string, number, date, boolean } from "yup";
import { productSchema } from "../components/Validations";
import { useFormik } from "formik";

export const useLocalStorage = (key, formValues, initialValues) => {
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
  const formik = useFormik({
    initialValues: {
      id: "",
      module: "ManualInput",
      name: "",
      price: null,
      quantity: 1,
      description: "",
      height: 0,
      width: 0,
      matWidth: 0,
      finish: "Sin acabado",
      finishQ: 1,
      material: "",
      descolillado: "",
      transfer: false,
      itemTotalPrice: 0,
    },
  });

  /*   let schema = object({
    name: string().required(),
    price: number().required().positive().integer(),
    quantity: number().required().positive().integer(),
    description: string().required(),
    height: number().required().positive(),
    width: number().required().positive(),
    matWidth: number().required().positive(),
    finish: string().required(),
    finishQ: number().required().positive(),
    material: string().required(),
    descolillado: string().required(),
    transfer: boolean(),
  }); */

  const [values, setProducts] = useState(initialState);
  const [open, setOpen] = useState(true);

  const handleInputChange = (e) => {
    setProducts({ ...values, [e.target.name]: e.target.value });
  };

  const totalCalc = () => {
    setProducts({
      ...values,
      itemTotalPrice: values.quantity * values.price,
    });
  };
  const resetForm = () => {
    formik.setValues(formik.initialValues);
    // setProducts(initialState);
  };

  const handlerAdd = (e) => {
    e.preventDefault();

    addItem({
      ...values,
      id: uuidv4(),
    });

    resetForm();
  };

  const items = useShoppingCart((state) => state.items) || [];
  const [list, setList] = useState(items);

  const handleRemove = (id) => {
    const newList = items.filter((item) => item.id !== id);

    setList(newList);
  };

  return {
    values,
    setProducts,
    handleInputChange,
    handlerAdd,
    totalCalc,
    resetForm,
    handleRemove,
  };
};

export const useOpen = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };
  return { open, setOpen, handleOpen, handleClose };
};

export const useGetCartTotalPrice = () => {
  const items = useShoppingCart((state) => state.items);
  let globalTotalPrice;
  items.length > 0
    ? (globalTotalPrice = items.map((item) => item.itemTotalPrice))
    : (globalTotalPrice = 0);
  let total;
  items.length > 0
    ? (total = globalTotalPrice.reduce((a, b) => a + b))
    : (total = 0);
  return total;
};
