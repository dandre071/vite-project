import { create } from "zustand";
import { persist } from "zustand/middleware";
/* import produce from "immer"; */

export const useShoppingCart = create()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (values) => {
        set((state) => ({
          items: [...state.items, values],
        }));
      },
      count: (state) => state.personalData,
      updateItem: (values, index, itemId, id) => {
        /*   const item = state.items.filter((item) => item.id === id); */
        set((state) => ({
          items: state.items.filter((item) => item.id === id),
        }));
      },
      removeItem: (id) => {
        set((state) => ({
          items: [...state.items, state.items.filter((item) => item.id !== id)],
        }));
      },
      /* increaseQuantity: (id) => {
        set((state) => ({
          ...state.items,
          quantity: (state.quantity += 1),
        }));
      }, */
      /*  increaseQuantity: (productId, quantity = 1) => {},
      decreaseQuantity: (productId, quantity = 1) => {}, */
      getTotalPrice: (items) => {
        const totalPrice = state.items.map((item) => item.itemTotalPrice);
        return totalPrice;
      },
      clearCart: () => {
        set((state) => ({
          items: (state.items = []),
        }));
      },
    }),
    {
      name: "shopping-cart",
      // storage: createJSONStorage(() => sessionStorage) es cun campo opcional si NO queremos usar localStorage.
    }
  )
);
const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const usePersonalData = create()(
  persist(
    (set, get) => ({
      personalData: {
        billType: "",
        clientType: "",
        name: "",
        email: "",
        phone: "",
      },

      addData: (values) => {
        set((state) => ({
          personalData: { ...values, values },
        }));
      },

      updateData: (product) => {},
      removeData: (id) => {
        set((state) => ({
          personalData: state.personalData.filter((data) => data.id !== id),
        }));
      },
      /* 
      data: getLocalStorage("personal-data") || [],
      setData: (data) =>
        set((state) => {
          setLocalStorage("personal-data", data);
          return { data };
        }), */

      /*  increaseQuantity: (productId, quantity = 1) => {},
      decreaseQuantity: (productId, quantity = 1) => {}, */

      clearData: () => {
        set((state) => ({
          personalData: (state.personalData = []),
        }));
      },
    }),

    {
      name: "personal-data",
      // storage: createJSONStorage(() => sessionStorage) es cun campo opcional si NO queremos usar localStorage.
    }
  )
);
