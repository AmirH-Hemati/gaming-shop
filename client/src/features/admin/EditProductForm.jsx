import { useState } from "react";
import FormLabel from "../../ui/FormLabel";
import Input from "../../ui/Input";
import { useEditProduct } from "./useEditProduct";
import { Button } from "@mui/material";
import Loading from "../../ui/Loading";

function EditProductForm({ product, onClose }) {
  const { editProduct, isPending } = useEditProduct();
  const [title, setTitle] = useState(product?.title);
  const [price, setPrice] = useState(product?.price);
  const [description, setDescription] = useState(product?.description);
  const [file, setFile] = useState("");

  function handelEditProduct(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("file", file);
    console.log(file)
    editProduct({ id: product?._id, formData });
  }
  return (
    <form onSubmit={handelEditProduct} className="flex flex-col p-2  gap-6 ">
      <FormLabel label="نام محصول">
        <Input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormLabel>
      <FormLabel label="قیمت">
        <Input
          type="text"
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </FormLabel>
      <FormLabel label="توضیحات">
        <textarea
          rows={4}
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          className="outline-none w-full md:w-1/2 text-black border-2 border-black/30 rounded-sm"
        ></textarea>
      </FormLabel>
      <input
        type="file"
        name="file"
        className="p-2"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <Button
        variant="contained"
        type="submit"
        sx={{ backgroundColor: "#192938", padding: "12px" }}
        className="w-full md:w-1/3 self-end"
      >
        ذخیره کردن
      </Button>
    </form>
  );
}

export default EditProductForm;
