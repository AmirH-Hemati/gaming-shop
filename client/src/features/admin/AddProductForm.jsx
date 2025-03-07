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
import { CloseSquare } from "iconsax-react";
function AddProductForm() {
  const { createProduct, isPending } = useCreateProduct();
  const [preview, setPriview] = useState("");
  const [previowImages, setPreviowImages] = useState([]);
  const [newSpec, setNewSpec] = useState({});
  const [sepcs, setSepcs] = useState([]);
  const [keyWord, setKeyWord] = useState("");
  const [keyWords, setKeyWords] = useState([]);
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
    const seoTitle = e.target.seoTitle.value;
    const seoDescription = e.target.seoDescription.value;
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
    formData.append("seoTitle", seoTitle);
    formData.append("seoDescription", seoDescription);
    formData.append("keywords", JSON.stringify(keyWords));

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
  function handelAddSepcs() {
    setSepcs((sepcs) => [...sepcs, newSpec]);
    toast.warn("میتوانید ویژگی های فنی بیشتری اضافه کنید");
  }
  function handelRemoveSepc(id) {
    setSepcs((sepc) => sepc.filter((sepc, index) => index !== id));
  }
  function handelAddKeyWord() {
    setKeyWords((keyWords) => [...keyWords, keyWord]);
    toast.warn("میتوانید کلمات کلیدی بیشتری اضافه کنید");
  }
  function handelRemoveKeyword(id) {
    setKeyWords((kewWords) =>
      kewWords.filter((kewWord, index) => index !== id)
    );
  }
  return (
    <form
      onSubmit={handelCreateProduct}
      className="flex-1 w-full  flex flex-col gap-3"
    >
      <FormLabel label={`عنوان سئو `}>
        <Input
          name={`seoTitle`}
          id={`seoTitle`}
          type={`text`}
          style={`text-black`}
          placeholder="مثلاً خرید موس لاجیتک G502 Hero با بهترین قیمت"
        />
      </FormLabel>
      <FormLabel label={`توضیحات سئو `}>
        <Input
          name={`seoDescription`}
          id={`seoDescription`}
          type={`text`}
          style={`text-black`}
        />
      </FormLabel>
      <h3 className="font-semibold text-xl">کلمات کلیدی سعو </h3>

      <div className="flex justify-between w-full mt-6 border-b-2 border-black/20 p-3">
        <div className="w-full flex flex-col gap-2">
          <Input
            name={`seoTitle`}
            id={`seoTitle`}
            type={`text`}
            style={`text-black`}
            value={keyWord}
            onChange={(e) => setKeyWord(e.target.value)}
          />
          <div className="text-xs  flex flex-wrap w-1/2 gap-2">
            {keyWords.map((keyWord, index) => (
              <div
                key={index}
                className="flex gap-2 items-center border-2 border-black/30 p-1 rounded-sm "
              >
                <CloseSquare
                  size="19"
                  color="black"
                  className="cursor-pointer"
                  onClick={() => handelRemoveKeyword(index)}
                />
                <p className="space-x-2">{keyWord}</p>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#192938" }}
          className="w-full md:w-1/6 self-end"
          onClick={handelAddKeyWord}
        >
          ثبت{" "}
        </Button>
      </div>
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
            <div
              key={index}
              className="flex gap-2 items-center border-2 border-black/30 p-2 rounded-sm "
            >
              <CloseSquare
                size="22"
                color="black"
                className="cursor-pointer"
                onClick={() => handelRemoveSepc(index)}
              />
              <p className="space-x-2">
                <span className="text-red-500 font-semibold">{spec.key}</span>:
                <span className="font-semibold">{spec.value}</span>
              </p>
            </div>
          ))}
        </div>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#192938" }}
          className="w-full md:w-1/6 self-end"
          onClick={handelAddSepcs}
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
