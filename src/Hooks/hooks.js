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

export const useProduct = (addItem) => {
  const initialState = {
    id: "",
    name: "",
    price: 0,
    quantity: 0,
    description: "",
    height: 0,
    width: 0,
    matWidth: 0,
    finish: "Sin acabado",
    finishQ: 0,
    material: "",
    descolillado: "",
    transfer: false,
    itemTotalPrice: 0,
  };
  const [products, setProducts] = useState(initialState);
  //const addItem = useShoppingCart((state) => state.addItem);
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

  const handlerAdd = (e) => {
    e.preventDefault();
    /* addItem(products); */
    addItem({
      ...products,
      /*  itemTotalPrice: products.price * products.quantity, */
    });

    setProducts(initialState);
  };

  return { products, setProducts, handleInputChange, handlerAdd, totalCalc };
};
