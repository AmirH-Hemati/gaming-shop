import axios from "axios";

export async function createProduct(formData) {
  const { data } = await axios.post(
    "http://localhost:1212/api/products/createProduct",
    formData
  );
  return data;
}
