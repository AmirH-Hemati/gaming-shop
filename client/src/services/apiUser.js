import axiosInstance from "./axiosInstance";

export async function getUsers() {
  const { data } = await axiosInstance.get("/user/users");
  return data;
}

export async function editUser(formData) {
  const { data } = await axiosInstance.put("/user/edit", formData);
  return data;
}
