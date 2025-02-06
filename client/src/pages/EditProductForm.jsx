import { useState } from "react";
import FormLabel from "../ui/FormLabel";
import Input from "../ui/Input";

function EditProductForm({ p, onClose }) {
  // const { editProduct } = useEditProduct();
  const [name, setName] = useState(p?.name);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(p?.price);
  const [file, setFile] = useState("");
  // function handelEditProduct(e) {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("price", price);
  //   formData.append("file", file);

  //   editProduct({ id: p?._id, formData });
  // }
  // return (
  <form className="flex flex-col p-2  gap-6 ">
    <FormLabel label="Name Product">
      <Input type="text" name="name" id="name" />
    </FormLabel>
    <FormLabel label="Name Product">
      <Input type="text" name="price" id="price" />
    </FormLabel>
    <FormLabel label="Description">
      <textarea
        name="description"
        id="description"
        className="outline-none w-full md:w-1/2 text-black border-2 border-black/30 rounded-sm"
      ></textarea>
    </FormLabel>
    <input type="file" name="file" className="p-2" />
    <div className="flex gap-4">
      <button>submit</button>
    </div>
  </form>;
}

export default EditProductForm;
