import axiosInstance from "./axiosInstance";
export async function addComment({ text, productId }) {
  const { data } = await axiosInstance.post({ text, productId });
  return data;
}
