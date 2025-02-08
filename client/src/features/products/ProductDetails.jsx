import { Button } from "@mui/material";
import AddToFavorite from "../../ui/AddToFavorite";
import { useGetProduct } from "./useGetProduct";
import { useAddToCart } from "../../context/ShoppingContext";
import ButtonAddToCarts from "../../ui/ButtonAddToCarts";

function ProductDetails() {
  const { product } = useGetProduct();
  const { handelIncreaseProduct, getProductQty } = useAddToCart();
  return (
    <div className=" w-full h-full shadow-custom  flex flex-col items-center pt-3">
      <div className="w-full h-2/3 md:w-[65%] rounded-sm flex flex-col md:flex-row-reverse gap-2">
        <img
          src={product?.data?.image}
          alt=""
          className="w-full h-full md:w-[80%] object-cover rounded-sm "
        />
        <div className=" w-full h-full  md:w-[20%] flex flex-row   md:flex-col gap-2">
          {product?.data?.images?.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                className="w-36   object-cover border-3 border-[#0998A8] "
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex h-1/2 flex-col w-full md:w-[65%]  py-4 gap-4">
        <div className="flex justify-between items-center w-full">
          <h1 className="md:text-3xl text-lg font-bold">
            {product?.data?.title}
          </h1>
          <AddToFavorite product={product?.data} />
        </div>
        <p className="text-gray-400  md:text-sm text-xs">
          {product?.data?.description}
        </p>
        <p className="text-xl font-semibold text-[#0998a8]">
          {product?.data?.price} تومان
        </p>
        {getProductQty(product?.data._id) > 0 ? (
          <div className="w-full md:w-1/2 self-end">
            <ButtonAddToCarts product={product?.data} />
          </div>
        ) : (
          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "#0998a8", padding: "12px" }}
            onClick={() => handelIncreaseProduct(product.data._id)}
          >
            افزودن به سبد خرید
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
