import axiosInstance from "./axiosInstance";

export async function createProduct(formData) {
  const { data } = await axiosInstance.post("/products/createProduct", formData);
  return data;
}
