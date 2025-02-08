import { toast } from "react-toastify";
import { useCreateProduct } from "../features/products/useCreateProduct";
import Input from "../ui/Input";
import FormLabel from "../ui/FormLabel";
import { useState } from "react";
import { Button } from "@mui/material";

function AddProduct() {
  const { createProduct } = useCreateProduct();
  const [preview, setPriview] = useState("");
  const [previowImages, setPreviowImages] = useState([]);

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
  function handelOtherImage(e) {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((image) => URL.createObjectURL(image));
    setPreviowImages(imageUrls);
  }
  return (
    <form
      onSubmit={handelCreateProduct}
      className="flex-1 w-full  flex flex-col gap-3"
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
      <FormLabel label="عکس اصلی محصول">
        <label
          htmlFor="image"
          className=" cursor-pointer w-60 h-20 p-1 rounded-sm  flex justify-center items-center text-xl border-2 border-dashed border-black"
        >
          {preview ? (
            <img
              src={preview}
              alt=""
              className="w-full object-cover h-full rounded-sm"
            />
          ) : (
            <div>+</div>
          )}
          <input
            type="file"
            id="image"
            name="image"
            className="hidden"
            onChange={(e) => setPriview(URL.createObjectURL(e.target.files[0]))}
          />
        </label>
      </FormLabel>
      <FormLabel label="عکس  های اسلایدر محصولات">
        <label
          htmlFor="images"
          className=" cursor-pointer w-1/2 h-20 p-1 rounded-sm  flex gap-2 text-lg items-center justify-center border-2 border-dashed border-black"
        >
          {previowImages.length > 0 ? (
            previowImages.map((image) => (
              <img
                src={image}
                key={image}
                className="w-20 h-18 object-cover rounded-sm"
              />
            ))
          ) : (
            <div>+ </div>
          )}

          <input
            type="file"
            className="hidden"
            id="images"
            name="images"
            multiple
            onChange={handelOtherImage}
          />
        </label>
      </FormLabel>
      <FormLabel label="دسته بندی محصولات">
        <select name="categories">
          <option value="all">همه</option>
          <option value="mouse">موس</option>
          <option value="keyboard">کیبورد</option>
          <option value="monitor">مانیتور</option>
        </select>
      </FormLabel>

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
