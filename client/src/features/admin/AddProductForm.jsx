import { useState } from "react";
import Loading from "../../ui/Loading";
import { useCreateProduct } from "./useCreateProduct";
import { Button } from "@mui/material";
import TextArea from "../../ui/TextArea";
import ImageProduct from "../../ui/ImageProduct";
import ImagesProduct from "../../ui/ImagesProduct";
import { toast } from "react-toastify";
import FormLabel from "../../ui/FormLabel";
import Input from "../../ui/Input";
function AddProductForm() {
  const { createProduct, isPending } = useCreateProduct();
  const [preview, setPriview] = useState("");
  const [previowImages, setPreviowImages] = useState([]);
  const [newSpec, setNewSpec] = useState({});
  const [sepcs, setSepcs] = useState([]);
  if (isPending) {
    return <Loading />;
  }
  function handelCreateProduct(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const categories = e.target.categories.value;
    const stock = e.target.stock.value;
    const brand = e.target.brand.value;
    const image = e.target.image.files[0];
    const images = e.target.images.files;
    if (
      !title ||
      !price ||
      !image ||
      !description ||
      !categories ||
      !stock ||
      !brand ||
      sepcs.length == 0
    ) {
      return toast.error("لطفاً همه فیلدها را پر کنید.");
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("categories", categories);
    formData.append("brand", brand);
    formData.append("stock", stock);
    formData.append("technical", JSON.stringify(sepcs));

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
      <FormLabel label={`تعداد موجودی محصول`}>
        <Input
          name={`stock`}
          id={`stock`}
          type={`number`}
          style={`text-black`}
        />
      </FormLabel>
      <FormLabel label={`نام برند`}>
        <Input name={`brand`} id={`brand`} type={`text`} style={`text-black`} />
      </FormLabel>
      <h3 className="font-semibold text-xl">ویزگی های فنی</h3>

      <div className="flex gap-10">
        <Input
          name={`key`}
          id={`key`}
          type={`text`}
          placeholder="نام ویژگی (مثلاً DPI)"
          style={`text-black`}
          value={newSpec.key}
          onChange={(e) =>
            setNewSpec((newSepc) => ({ ...newSepc, key: e.target.value }))
          }
        />
        <Input
          name={`value`}
          id={`value`}
          placeholder="مقدار ویژگی (مثلاً 16000)"
          type={`text`}
          style={`text-black`}
          value={newSpec.value}
          onChange={(e) =>
            setNewSpec((newSepc) => ({ ...newSepc, value: e.target.value }))
          }
        />
      </div>
      <div className="flex justify-between">
        <div className="text-xs  flex flex-wrap w-1/2 gap-2">
          {sepcs.map((spec, index) => (
            <p key={index} className="flex gap-2">
              <span className="text-red-500 font-semibold">{spec.key}</span>:
              <span className="font-semibold">{spec.value}</span>
            </p>
          ))}
        </div>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#192938" }}
          className="w-full md:w-1/6 self-end"
          onClick={() => setSepcs((sepcs) => [...sepcs, newSpec])}
        >
          ثبت{" "}
        </Button>
      </div>
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
