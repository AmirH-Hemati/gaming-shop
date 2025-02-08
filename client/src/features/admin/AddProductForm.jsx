import { useState } from "react";
import Loading from "../../ui/Loading";
import { useCreateProduct } from "./useCreateProduct";
import { Button, FormLabel, Input } from "@mui/material";
import TextArea from "../../ui/TextArea";
import ImageProduct from "../../ui/ImageProduct";
import ImagesProduct from "../../ui/ImagesProduct";
import { toast } from "react-toastify";
function AddProductForm() {
  const { createProduct, isPending } = useCreateProduct();
  const [preview, setPriview] = useState("");
  const [previowImages, setPreviowImages] = useState([]);
  if (isPending) {
    return <Loading />;
  }
  function handelCreateProduct(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const categories = e.target.categories.value;
    const image = e.target.image.files[0];
    const images = e.target.images.files;
    if (!title || !price || !image || !description || !categories) {
      return toast.error("لطفاً همه فیلدها را پر کنید.");
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
      <TextArea name="description" />
      <ImageProduct preview={preview} setPriview={setPriview} />
      <ImagesProduct
        previowImages={previowImages}
        handelOtherImage={handelOtherImage}
      />
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

export default AddProductForm;
