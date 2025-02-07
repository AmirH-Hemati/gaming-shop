import AddToFavorite from "../../ui/AddToFavorite";
import { useGetProduct } from "./useGetProduct";

function ProductDetails() {
  const { product } = useGetProduct();
  console.log(product);
  return (
    <div className="w-full h-full bg-red-500 flex itece">
      <div className="w-1/2 rounded-sm">
        <img
          src={product?.data?.image}
          alt=""
          className="w-full object-cover rounded-sm"
        />
      </div>
      <div className="w-1/2 p-6">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-3xl font-bold mb-3">{product?.data?.title}</h1>
          <AddToFavorite />
        </div>
        <p className="text-gray-400 mb-3">{product?.data?.description}</p>
        <p className="text-xl font-semibold text-green-400">
          {product?.data?.price} تومان
        </p>

        {/* دکمه خرید */}
        <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white rounded-lg shadow-md transition">
          🛒 افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
