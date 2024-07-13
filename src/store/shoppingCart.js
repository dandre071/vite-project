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

export const usePersonalData = create()(
  persist(
    (set, get) => ({
      personalData: [],
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
