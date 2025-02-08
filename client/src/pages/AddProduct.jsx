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
    const description = e.target.description.value;
    const categories = e.target.categories.value;
    const image = e.target.image.files[0];
    const images = e.target.images.files;
    if (!title || !price || !image || !description) {
      return toast.error("input empty");
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("categories", categories);
    formData.append("image", image);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    createProduct(formData);
  }

  return (
    <form
      onSubmit={handelCreateProduct}
      className="w-full h-full flex flex-col justify-between"
    >
      <FormLabel label={`نام محصول`}>
        <Input name={`title`} id={`title`} type={`text`} style={`text-black`} />
      </FormLabel>
      <FormLabel label={`قیمت`}>
        <Input
          name={`price`}
          id={`price`}
          type={`number`}
          style={`text-black`}
        />
      </FormLabel>
      <FormLabel label="توضیحات">
        <textarea
          rows={4}
          name="description"
          id="description"
          className="outline-none w-full md:w-1/2 text-black border-2 border-black/30 rounded-sm"
        ></textarea>
      </FormLabel>
      <label
        htmlFor="image"
        className=" cursor-pointer w-full rounded-sm h-32 flex justify-center items-center text-xl border-2 border-dotted border-black"
      >
        {preview ? (
          <img src={preview} alt="" className="w-full object-cover h-32" />
        ) : (
          <div>عکس</div>
        )}
        <input
          type="file"
          id="image"
          name="image"
          className="hidden"
          onChange={(e) => setPriview(URL.createObjectURL(e.target.files[0]))}
        />
      </label>
      <input type="file" id="images" name="images" multiple />
      <select name="categories">
        <option value="همه">همه</option>
        <option value="موس">موس</option>
        <option value="کیبورد">کیبورد</option>
        <option value="مانیتور">مانیتور</option>
      </select>
      <Button
        variant="contained"
        type="submit"
        sx={{ backgroundColor: "#192938", padding: "12px" }}
        className="w-full md:w-1/3 self-end"
      >
        ایجاد محصول جدید{" "}
      </Button>
    </form>
  );
}

export default AddProduct;
