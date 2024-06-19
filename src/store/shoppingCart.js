import { create } from "zustand";
import { persist } from "zustand/middleware";

/* const product = {
  id: "",
  name: "",
  price: "",
  quantity: null,
  description: "",
  height: null,
  width: null,
  matWidth: null,
  finish: "",
  material: "",
  descolillado: "",
  transfer: false,
}; */

/* const cartItem = {
  product,
}; */

/* const shoppingCart = {
  items: cartItem,
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  getTotalPrice,
  clearCart,
}; */

export const useShoppingCart = create()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        set((state) => ({
          items: [...state.items, product],
        }));
      },
      removeItem: (productId) => {},
      increaseQuantity: (productId, quantity = 1) => {},
      decreaseQuantity: (productId, quantity = 1) => {},
      getTotalPrice: () => {},
      clearCart: () => {},
    }),
    {
      name: "shopping-cart",
      // storage: createJSONStorage(() => sessionStorage) es cun campo opcional si NO queremos usar localStorage.
    }
  )
);
