import { useCreateProduct } from "../features/products/useCreateProduct";

function CreateProduct() {
  const { createProduct } = useCreateProduct();
  function handelCreateProduct(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    createProduct(formData);
  }
  return (
    <form
      onSubmit={handelCreateProduct}
      className="w-full  h-full flex flex-col"
    >
      <input type="text" placeholder="title product" name="title" />
      <input type="text" placeholder="price" name="price" />
      <input type="file" name="file" />
      <button type="submit">create Product</button>
    </form>
  );
}

export default CreateProduct;
