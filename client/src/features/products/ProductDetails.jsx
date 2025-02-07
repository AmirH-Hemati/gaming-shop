import AddToFavorite from "../../ui/AddToFavorite";
import { useGetProduct } from "./useGetProduct";

function ProductDetails() {
  const { product } = useGetProduct();
  const array = [1, 2, 3, 4];
  return (
    <div className=" w-full h-full shadow-custom  flex flex-col items-center justify-center ">
      <div className="w-full md:w-1/2 rounded-sm flex flex-col md:flex-row-reverse gap-2">
        <img
          src={product?.data?.image}
          alt=""
          className="w-full md:w-[80%] object-cover rounded-sm "
        />
        <div className="w-full md:w-[20%] flex flex-row   md:flex-col gap-2">
          {array.map((i) => (
            <div key={i}>
              <img
                src={product?.data?.image}
                className="w-36 object-cover border-3 border-[#0998A8] "
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/2 md:p-6">
        <div className="flex justify-between items-center w-full">
          <h1 className="md:text-3xl text-lg font-bold">
            {product?.data?.title}
          </h1>
          <AddToFavorite />
        </div>
        <div className="self-end">star</div>
        <p className="text-gray-400  md:text-sm text-xs">
          {product?.data?.description}
        </p>
        <p className="text-xl font-semibold text-green-400">
          {product?.data?.price} price
        </p>

        <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white rounded-lg shadow-md transition">
          🛒 افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
