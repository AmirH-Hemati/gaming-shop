import { useEffect, useState } from "react";
import { useAddToCart } from "../../context/ShoppingContext";
import Loading from "../../ui/Loading";
import AddToFavorite from "../../ui/AddToFavorite";
import ButtonAddToCarts from "../../ui/ButtonAddToCarts";
import { formatNumber } from "../../utils/formatNumber";
import { Button } from "@mui/material";

function ProductInformation({ product, isPending }) {
  const [activeImage, setActiveImage] = useState("");
  const { handelIncreaseProduct, getProductQty } = useAddToCart();

  useEffect(() => {
    setActiveImage(product?.data?.image);
  }, [product?.data?.image]);
  if (isPending) {
    return <Loading />;
  }
  let allImage;
  if (product?.data?.images && product?.data?.image)
    allImage = [product.data.image, ...product.data.images];
  return (
    <div className=" h-2/3 gap-2  flex   ">
      <div className="w-full h-full  md:w-1/2  rounded-sm space-y-2">
        <img
          src={activeImage}
          alt=""
          className="w-full h-[80%] object-cover rounded-sm"
        />
        <div className=" w-full h-[20%] flex gap-2 overflow-auto ">
          {allImage?.map((image, index) => (
            <div
              className="w-18 h-18 "
              key={index}
              onClick={() => setActiveImage(image)}
            >
              <img
                src={image}
                className={`cursor-pointer rounded-sm object-cover border-6 ${
                  activeImage == image ? "border-red-500" : "border-[#0998A8]"
                } `}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex h-full text-sm flex-col w-full md:w-[65%] justify-between p-4 shadow-custom rounded-sm">
        <div className="flex justify-between items-center w-full border-b-2 border-white/30 pb-3">
          <h1 className="md:text-2xl text-lg font-bold ">
            {product?.data?.title}
          </h1>
          <AddToFavorite product={product?.data} />
        </div>
        <div className="space-y-2">
          <p>برند : {product?.data?.brand}</p>
          <p className="border-b-2 border-white/30 ">
            دسته بندی : {product?.data?.categories}
          </p>
        </div>

        <p className="space-x-2 border-b-2 border-white/30 pb-3">
          <span>تاریخ بروز رسانی :</span>
          <span>
            {new Date(product?.data?.updatedAt).toLocaleDateString("fa-IR")}
          </span>
        </p>
        <p className="text-gray-400  md:text-sm text-xs">
          {product?.data?.description}
        </p>
        <p className="text-xl font-semibold text-[#0998a8]">
          {formatNumber(product?.data?.price)} تومان
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

export default ProductInformation;
