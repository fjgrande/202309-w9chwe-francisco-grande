import { useCallback } from "react";
import { UsersStructure } from "../store/feature/users/types";
import axios from "axios";

const useUsersApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getUsers = useCallback(async () => {
    const { data: users } = await axios.get<UsersStructure[]>("/users");
    return users;
  }, []);

  return { getUsers };
};

export default useUsersApi;
