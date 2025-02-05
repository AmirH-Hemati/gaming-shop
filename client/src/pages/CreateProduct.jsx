import { toast } from "react-toastify";
import { useCreateProduct } from "../features/products/useCreateProduct";

function CreateProduct() {
  const { createProduct } = useCreateProduct();
  function handelCreateProduct(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const price = e.target.price.value;
    const file = e.target.file.files[0];
    if (!title || !price || !file) return toast.error("input empty");
    const formData = new FormData(e.target);
    createProduct(formData);
  }
  return (
    <form
      onSubmit={handelCreateProduct}
      className="w-full  h-full flex flex-col"
    >
      <input type="text" placeholder="title product" name="title" />
      <input type="number" placeholder="price" name="price" />
      <input type="file" name="file" />
      <button type="submit">create Product</button>
    </form>
  );
}

export default CreateProduct;
