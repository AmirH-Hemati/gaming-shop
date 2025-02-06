import { Edit, Trash } from "iconsax-react";
import { useGetProducts } from "../features/products/useGetProducts";
import Modal from "../ui/Modal";
import EditProductForm from "./EditProductForm";
import { useRemoveProduct } from "../features/admin/useRemoveProduct";

function EditProducts() {
  const { products } = useGetProducts();
  const { removeProduct } = useRemoveProduct();
  return (
    <div className=" flex flex-col h-full w-full overflow-hidden  text-sm md:text-base">
      <div className="w-full font-semibold md:mt-8 grid grid-cols-[1fr_2fr_1fr_1fr] gap-3  bg-[#F9FAFB]  md:gap-6 rounded-t-md p-4 border-2 border-black/10">
        <p>image</p>
        <p>name</p>
        <p>price</p>
        <p>edit</p>
      </div>
      <ul className="bg-white w-full flex flex-col overflow-y-auto h-full md:h-full    ">
        {products?.data.map((product) => (
          <li
            key={product._id}
            className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-3 w-full bg-white  px-4 py-6 md:gap-6 border-2 border-black/10"
          >
            <img src={product.image} alt="" className="w-20  object-cover" />
            <p className="truncate flex items-center">{product.title}</p>
            <p className="flex items-center">{product.price}</p>
            <div className="flex items-center gap-2 md:gap-7">
              <Modal>
                <Modal.Open openies="openEditModal">
                  <Edit size="28" color="#00512c" className="cursor-pointer" />
                </Modal.Open>
                <Modal.Window name={`openEditModal`}>
                  <EditProductForm product={product} />
                </Modal.Window>
              </Modal>
              <Trash
                m
                size="28"
                color="#00512c"
                className="cursor-pointer"
                onClick={() => removeProduct(product._id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditProducts;
