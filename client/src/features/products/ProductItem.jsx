import { AddSquare, Star1 } from "iconsax-react";
import AddToFavorite from "../../ui/AddToFavorite";
import { Link } from "react-router-dom";
import { formatNumber } from "../../utils/formatNumber";

function ProductItem({ product }) {
  return (
    <li className="z-10 relative flex flex-col gap-2  bg-bg-main p-4 rounded-xl shadow-custom cursor-pointer">
      <div className="relative w-full">
        <img
          src={product?.image}
          className="w-full object-cover aspect-video rounded-xl"
          alt=""
        />
        <div className="flex items-center justify-center absolute top-0 right-0 bg-bg-main rounded-bl-xl p-2">
          <AddToFavorite product={product} />
        </div>
      </div>
      <div className="flex self-end">
        <Star1 size="26" color="#0998a8" variant="Bold" />
        <Star1 size="26" color="#0998a8" variant="Bold" />
        <Star1 size="26" color="#0998a8" variant="Bold" />
      </div>
      <p className="font-semibold text-lg">{product?.title}</p>
      <p className="text-sm text-[#0998a8]">
        {formatNumber(product?.price)}{" "}
        <span className="text-xs text-gray-400">تومان</span>
      </p>
      <Link to={`/products/${product?._id}`}>
        <div className="absolute  bottom-0 right-0 rounded-br-2xl rounded-tl-2xl bg-[#0998a8] p-1">
          <AddSquare size="24" color="white" />
        </div>
      </Link>
    </li>
  );
}

export default ProductItem;
