import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePaymentData = create()(
  persist(
    (set, get) => ({
      paymentData: {
        receives: "",
        do: "",
        delivery: "",
        payment: null,
        comments: "",
        pending: null,
      },

      addData: (values) => {
        set(() => ({
          paymentData: { ...values, values },
        }));
      },

      updateData: (product) => {},
      removeData: (id) => {
        set((state) => ({
          paymentData: state.paymentData.filter((data) => data.id !== id),
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
          paymentData: (state.paymentData = {
            receives: "",
            do: "",
            delivery: new Date(),
            payment: null,
            comments: "",
            pending: null,
          }),
        }));
      },
    }),

    {
      name: "payment-data",
      // storage: createJSONStorage(() => sessionStorage) es cun campo opcional si NO queremos usar localStorage.
    }
  )
);
