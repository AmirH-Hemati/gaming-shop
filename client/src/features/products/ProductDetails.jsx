import { Button } from "@mui/material";
import AddToFavorite from "../../ui/AddToFavorite";
import { useGetProduct } from "./useGetProduct";

function ProductDetails() {
  const { product } = useGetProduct();
  const array = [1, 2, 3, 4];
  return (
    <div className=" w-full h-full shadow-custom  flex flex-col items-center pt-3">
      <div className="w-full md:w-[65%] rounded-sm flex flex-col md:flex-row-reverse gap-2">
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
      <div className="flex flex-col w-full md:w-[65%]  py-4 gap-4">
        <div className="flex justify-between items-center w-full">
          <h1 className="md:text-3xl text-lg font-bold">
            {product?.data?.title}
          </h1>
          <AddToFavorite product={product} />
        </div>
        <p className="text-gray-400  md:text-sm text-xs">
          {product?.data?.description}
        </p>
        <p className="text-xl font-semibold text-[#0998a8]">
          {product?.data?.price} تومان
        </p>
        <Button
          variant="contained"
          type="submit"
          sx={{ backgroundColor: "#0998a8", padding: "12px" }}
        >
          افزودن به سبد خرید
        </Button>
      </div>
    </div>
  );
}

export default ProductDetails;
