import { toast } from "react-toastify";
import { useCreateProduct } from "../features/products/useCreateProduct";
import Input from "../ui/Input";
import FormLabel from "../ui/FormLabel";
import { useState } from "react";
import { Button } from "@mui/material";

function AddProduct() {
  const { createProduct } = useCreateProduct();
  const [preview, setPriview] = useState("");

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
      className="w-full h-full flex flex-col justify-between"
    >
      <FormLabel label={`title`}>
        <Input name={`title`} id={`title`} type={`text`} />
      </FormLabel>
      <FormLabel label={`price`}>
        <Input name={`price`} id={`price`} type={`number`} />
      </FormLabel>
      <FormLabel label="Description">
        <textarea
          rows={4}
          name="description"
          id="description"
          className="outline-none w-full md:w-1/2 text-black border-2 border-black/30 rounded-sm"
        ></textarea>
      </FormLabel>
      <label
        htmlFor="file"
        className=" cursor-pointer w-full rounded-sm h-32 flex justify-center items-center text-xl border-2 border-dotted border-black"
      >
        {preview ? (
          <img src={preview} alt="" className="w-full object-cover h-32" />
        ) : (
          <div>image</div>
        )}
        <input
          type="file"
          id="file"
          name="file"
          className="hidden"
          onChange={(e) => setPriview(URL.createObjectURL(e.target.files[0]))}
        />
      </label>
      <Button
        variant="contained"
        type="submit"
        sx={{ backgroundColor: "#192938", padding: "12px" }}
        className="w-full md:w-1/3 self-end"
      >
        Create Product
      </Button>
    </form>
  );
}

export default AddProduct;
