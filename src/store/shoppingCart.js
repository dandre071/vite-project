import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useShoppingCart = create()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (values) => {
        set((state) => ({
          items: [...state.items, values],
        }));
      },
      updateItem: (product) => {},
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
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
      personalData: [
        {
          billType: "Recibo",
          clientType: "Particular",
          name: "",
          email: "",
          phone: "",
          nit: "",
          //receives: "",
        },
      ],
      addData: (values) => {
        set((state) => ({
          personalData: [values],
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

      clearCart: () => {
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
