import axios from "axios";
import axiosInstance from "./axiosInstance";
export async function login({ email, password }) {
  const { data } = await axios.post("http://192.168.1.3:1212/api/auth/login", {
    email,
    password,
  });
  return data;
}

export async function register({ userName, email, password }) {
  const { data } = await axios.post(
    "http://192.168.1.3:1212/api/auth/register",
    {
      userName,
      email,
      password,
    }
  );
  return data;
}
export async function changePassword({ email, password, newPassword }) {
  const { data } = await axiosInstance.post("/auth/changePassword", {
    email,
    password,
    newPassword,
  });
  return data;
}
export async function getCurrentUser() {
  const { data } = await axiosInstance.get("/user/me");
  return data;
}
