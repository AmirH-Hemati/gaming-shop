import { AddSquare, Star1 } from "iconsax-react";
import { useAddToCart } from "../../context/ShoppingContext";
import AddToFavorite from "../../ui/AddToFavorite";

function ProductItem({ product }) {
  const { handelIncreaseProduct } = useAddToCart();
  return (
    <li className=" relative flex flex-col gap-2  bg-bg-main p-4 rounded-xl shadow-custom cursor-pointer">
      <div className="relative w-full">
        <img
          src={product?.image}
          className="w-full object-cover rounded-xl"
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
      <p className="text-sm text-[#0998a8]">{product?.price}$</p>
      <div className="absolute  bottom-0 right-0 rounded-br-2xl rounded-tl-2xl bg-[#0998a8] p-1">
        <AddSquare
          size="28"
          color="white"
          onClick={() => handelIncreaseProduct(product._id)}
        />
      </div>
    </li>
  );
}

export default ProductItem;
