import { useCallback } from "react";
import { UsersStructure } from "../store/feature/users/types";
import axios from "axios";

const useUsersApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getUsers = useCallback(async () => {
    const { data: users } = await axios.get<{ users: UsersStructure[] }>(
      `${apiUrl}/users`,
    );
    return users;
  }, [apiUrl]);

  return { getUsers };
};

export default useUsersApi;
