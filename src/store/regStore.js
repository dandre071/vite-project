import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useRegData = create()(
  persist(
    (set, get) => ({
      regData: {
        cliente: "",
        recepcion: "",
        entrega: "",
        recibe: "",
        realiza: "",
        nombre: "",
        nit: "",
        telefono: "",
        email: "",
        total: null,
        abono1: null,
        abono2: 0,
        resta: null,
        observaciones: "",
        estado: "",
      },

      addData: (values) => {
        set((state) => ({
          regData: { values },
        }));
      },

      /*  updateData: (product) => {},
      removeData: (id) => {
        set((state) => ({
          personalData: state.personalData.filter((data) => data.id !== id),
        }));
      }, */
      /* 
        data: getLocalStorage("personal-data") || [],
        setData: (data) =>
          set((state) => {
            setLocalStorage("personal-data", data);
            return { data };
          }), */

      /*  increaseQuantity: (productId, quantity = 1) => {},
        decreaseQuantity: (productId, quantity = 1) => {}, */

      /* clearData: () => {
        set((state) => ({
          personalData: (state.personalData = []),
        }));
      }, */
    }),

    {
      name: "reg-data",
      // storage: createJSONStorage(() => sessionStorage) es cun campo opcional si NO queremos usar localStorage.
    }
  )
);
