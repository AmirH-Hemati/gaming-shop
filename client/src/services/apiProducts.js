import axios from "axios";
import axiosInstance from "./axiosInstance";

export async function createProduct(formData) {
  const { data } = await axiosInstance.post(
    "/products/createProduct",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  return data;
}

export async function getProducts() {
  const { data } = await axiosInstance.get("/products/");
  return data;
}
