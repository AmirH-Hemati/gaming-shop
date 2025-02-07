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
  console.log("test in axios for send request in api ");
  return data;
}

export async function editProduct({ id, formData }) {
  const { data } = await axiosInstance.post(`/products/edit/${id}`, {
    formData,
  });
  return data;
}
export async function removeProduct(id) {
  const { data } = await axiosInstance.delete(`/products/${id}`);
  return data;
}
export async function getDetailsProducts(items) {
  const { data } = await axiosInstance.post(`/products/details`, {
    items,
  });
  console.log(data);
  return data;
}
