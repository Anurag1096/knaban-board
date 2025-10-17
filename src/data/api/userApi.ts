// data/api/userApi.ts
import { axiosClient } from "./axiosClient";
//All the api endpoint related to users.
export const getUsers = async () => {
  const res = await axiosClient.get("/users");
  return res.data;
};

export const getUserById = async (id: string) => {
  const res = await axiosClient.get(`/users/${id}`);
  return res.data;
};
