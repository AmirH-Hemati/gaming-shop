import axiosInstance from "./axiosInstance";

export async function getUsers() {
  const { data } = await axiosInstance.get("/user/users");
  return data;
}
