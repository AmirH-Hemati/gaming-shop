import { useState } from "react";
import ProductInformation from "./ProductInformation";
import { useGetProduct } from "./useGetProduct";
import AddComment from "../comment/AddComment";
import Modal from "../../ui/Modal";
import Comments from "../comment/Comments";
function ProductDetails() {
  const [tabs, setTabs] = useState("specs");
  const { product, isPending } = useGetProduct();
  return (
    <div className="w-full h-full flex-col p-4  overflow-auto mb-4">
      <ProductInformation product={product} isPending={isPending} />
      <div className="flex gap-4 mt-10">
        <p
          className={`select-none shadow-custom p-2 rounded-sm cursor-pointer font-semibold ${
            tabs == "specs" && "text-[#0998A8]"
          }`}
          onClick={() => setTabs("specs")}
        >
          ویزگی محصول
        </p>
        <p
          className={`select-none shadow-custom p-2 rounded-sm cursor-pointer font-semibold ${
            tabs == "comments" && "text-[#0998A8]"
          }`}
          onClick={() => setTabs("comments")}
        >
          کامند ها
        </p>
      </div>
      {tabs == "specs" && (
        <div className="w-full mt-4">
          {product?.data?.technicalSpecs.map((spec, index) => (
            <div
              key={index}
              className="bg-white even:bg-[#0998A8] p-2 rounded-sm  text-black w-full"
            >
              <p className="space-x-10">
                <span>{spec.key}</span>
                <span>{spec.value}</span>
              </p>
            </div>
          ))}
        </div>
      )}
      {tabs == "comments" && (
        <div className="w-full mt-4 flex flex-col  gap-4">
          <h1 className="font-semibold text-lg">امتیاز و نظرات کاربران</h1>
          <div className="flex items-start w-full justify-between">
            <Modal>
              <Modal.Open>
                <button className="bg-[#0998A8] text-white p-2 ">
                  ثبت دیدگاه
                </button>
              </Modal.Open>
              <Modal.Window>
                <AddComment productId={product?.data?._id} />
              </Modal.Window>
            </Modal>
            <div className="w-[70%] ">
              <Comments id={product?.data?._id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
