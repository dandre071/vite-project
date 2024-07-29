import { create } from "zustand";
import { persist } from "zustand/middleware";
import supabase from "../config/supabaseClient";

export const useUsersList = create()(
  persist(
    (set, get) => ({
      users: [],
      fetchUsers: async () => {
        const { data } = await supabase.from("workers").select("*");
        set((state) => ({
          users: data,
        }));
        console.log(data);
      },

      subscribeToUsers: () => {
        return supabase.from("workers").on("INSERT", (payload) => {
          set((state) => ({ users: [...state.users, payload.new] }));
        });
      },
    }),

    {
      name: "users-list",
      // storage: createJSONStorage(() => sessionStorage) es cun campo opcional si NO queremos usar localStorage.
    }
  )
);
