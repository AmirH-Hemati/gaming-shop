import { toast } from "react-toastify";
import { useCreateProduct } from "../features/products/useCreateProduct";
import Input from "../ui/Input";
import FormLabel from "../ui/FormLabel";

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
      <FormLabel label={`title`}>
        <Input name={`title`} id={`title`} type={`text`} />
      </FormLabel>
      <FormLabel label={`price`}>
        <Input name={`number`} id={`number`} type={`number`} />
      </FormLabel>
      <label htmlFor="file">
        <div className="w-full rounded-sm h-16 flex justify-center items-center text-xl border-2 border-dashed border-black">+</div>
        <input type="file" id="file" name="file" className="hidden" />
      </label>
      <button type="submit">create Product</button>
    </form>
  );
}

export default CreateProduct;
