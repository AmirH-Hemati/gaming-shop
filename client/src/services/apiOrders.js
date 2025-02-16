import axiosInstance from "./axiosInstance";

export async function getAllOrders(search) {
  const { data } = await axiosInstance.get(`/orders?search=${search}`);
  return data;
}

export async function getOrder(id) {
  const { data } = await axiosInstance.get(`/orders/${id}`);
  return data;
}
export async function updateOrder({ orderStatus, id }) {
  const { data } = axiosInstance.put(`/orders/${id}`, { orderStatus });
  return data;
}
export async function myOrders() {
  console.log("test")
  const { data } = await axiosInstance.get("/orders/myOrders");
  return data;
}
