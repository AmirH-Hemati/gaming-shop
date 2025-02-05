import { AddSquare, Heart, Star1 } from "iconsax-react";

function ProductItem() {
  return (
    <li className=" relative flex flex-col gap-2  bg-bg-main p-4 rounded-xl shadow-custom cursor-pointer">
      <div className="relative w-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJPPKxGMgzMNURTx8m2YgHyA_WMoIjcq2FQ&s"
          className="w-full object-cover rounded-xl"
          alt=""
        />
        <div className="flex items-center justify-center absolute top-0 right-0 bg-bg-main rounded-bl-xl p-2">
          <Heart size="28" color="white" />
        </div>
      </div>
      <div className="flex self-end">
        <Star1 size="26" color="#0998a8" variant="Bold" />
        <Star1 size="26" color="#0998a8" variant="Bold" />
        <Star1 size="26" color="#0998a8" variant="Bold" />
      </div>
      <p className="font-semibold text-lg">mmouse gaming razer</p>
      <p className="text-sm text-[#0998a8]">16.99$</p>
      <div className="absolute  bottom-0 right-0 rounded-br-2xl rounded-tl-2xl bg-[#0998a8] p-1">
        <AddSquare size="28" color="white" />
      </div>
    </li>
  );
}

export default ProductItem;
