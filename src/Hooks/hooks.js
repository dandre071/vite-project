import { useEffect, useState } from "react";
import { useShoppingCart } from "../store/shoppingCart";
import { v4 as uuidv4 } from "uuid";
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
  const [open, setOpen] = useState(true);
  const handleInputChange = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });

    // console.log(products);
  };

  const totalCalc = () => {
    setProducts({
      ...products,
      itemTotalPrice: products.quantity * products.price,
    });
  };

  const handlerAdd = (e) => {
    e.preventDefault();
    addItem({
      ...products,
      id: uuidv4(),
    });
    resetForm();
  };
  const items = useShoppingCart((state) => state.items);
  const [list, setList] = useState(items);

  const handleRemove = (id) => {
    const newList = items.filter((item) => item.id !== id);

    setList(newList);
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
