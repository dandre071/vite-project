import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

const useUsers = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getUsers() {
      let { data, error } = await supabase.from("workers").select("*");
      // console.log(supabase);

      if (data != null) {
        setUser(data);
      }
    }

    getUsers();
  }, []);

  const users = user.map((x) => x["users"]);

  return { user, setUser, users };
};

export default useUsers;
