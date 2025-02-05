import axios from "axios";
export async function login({ email, password }) {
  const { data } = await axios.post("", { email, password });
  return data;
}

export async function register({ userName, email, password }) {
  const { data } = await axios.post("", { userName, email, password });
  return data;
}
