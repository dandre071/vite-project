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
      increaseQuantity: (productId, quantity = 1) => {},
      decreaseQuantity: (productId, quantity = 1) => {},
      getTotalPrice: (items) => {
        const totalPrice = state.items.map((item) => item.itemTotalPrice);
        return totalPrice;
      },
      clearCart: () => {},
    }),
    {
      name: "shopping-cart",
      // storage: createJSONStorage(() => sessionStorage) es cun campo opcional si NO queremos usar localStorage.
    }
  )
);
