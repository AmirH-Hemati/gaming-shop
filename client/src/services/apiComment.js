import axiosInstance from "./axiosInstance";
import axios from "axios";
export async function addComment({ text, productId }) {
  console.log(text);
  const { data } = await axiosInstance.post("/comment/addComment", {
    text,
    productId,
  });
  return data;
}

export async function getComments(id) {
  const { data } = await axios.get(
    `http://localhost:1212/api/comment/comments/${id}`
  );
  return data;
}
