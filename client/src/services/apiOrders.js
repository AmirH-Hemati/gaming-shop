import axiosInstance from "./axiosInstance";

export async function getAllOrders() {
  const { data } = await axiosInstance.get("/orders");
  return data;
}
export async function myOrders() {
  const { data } = await axiosInstance.get("/orders/myOrders");
  return data;
}
export async function getOrder(id) {
  const { data } = await axiosInstance.get(`/orders/${id}`);
  return data;
}
