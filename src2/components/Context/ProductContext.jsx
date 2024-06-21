import { create } from "@mui/material/styles/createTransitions";
import { useContext, createContext, useReducer } from "react";
//create context to hold the state
const ProductContext = createContext();
//define the initial state
const initialState = {
  producto: "",
  precio: "",
  acabado: "",
  cantidad_acabado: "",
  cantidad: "",
  description: "",
};
//define the reducer function to handle state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case "add-product":
      return;
  }
};

//create a component that will provide the context
const productProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
//create a function that invokes the context

export const useProductContext = () => {
  return useContext(ProductContext);
};
