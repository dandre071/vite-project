import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePaymentData = create()(
  persist(
    (set, get) => ({
      paymentData: {},

      addData: (values) => {
        set((state) => ({
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

      clearCart: () => {
        set((state) => ({
          paymentData: (state.paymentData = []),
        }));
      },
    }),

    {
      name: "payment-data",
      // storage: createJSONStorage(() => sessionStorage) es cun campo opcional si NO queremos usar localStorage.
    }
  )
);
