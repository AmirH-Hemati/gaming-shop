import { Button } from "@mui/material";
import AddToFavorite from "../../ui/AddToFavorite";
import { useGetProduct } from "./useGetProduct";
import { useAddToCart } from "../../context/ShoppingContext";
import ButtonAddToCarts from "../../ui/ButtonAddToCarts";
import { useEffect, useState } from "react";
import { formatNumber } from "../../utils/formatNumber";
import Loading from "../../ui/Loading";
import { useAddComment } from "../comment/useAddComment";
import { useGetComments } from "../comment/useGetComments";

function ProductDetails() {
  const [activeImage, setActiveImage] = useState("");
  const [comment, setComment] = useState("");
  const { product, isPending } = useGetProduct();
  const { handelIncreaseProduct, getProductQty } = useAddToCart();
  const { addComment } = useAddComment();
  const { comments } = useGetComments(product?.data?._id);
  useEffect(() => {
    setActiveImage(product?.data?.image);
  }, [product?.data?.image]);

  if (isPending) {
    return <Loading />;
  }
  console.log(product?.data);

  let allImage;
  if (product?.data?.images && product?.data?.image)
    allImage = [product.data.image, ...product.data.images];
  return (
    <div className="box-border  w-full h-full shadow-custom gap-2  flex  p-4 overflow-auto">
      <div className="w-full h-2/3  md:w-1/2  rounded-sm space-y-2">
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
      <div className="flex h-2/3 text-sm flex-col w-full md:w-[65%] justify-between p-4 shadow-custom rounded-sm">
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

export default ProductDetails;
{
  /* <div className="flex flex-col w-full p-4 gap-4">
        <textarea
          rows={4}
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border-2 border-white outline-none "
        ></textarea>
        <button
          className="bg-red-500 text-white p-4"
          onClick={() =>
            addComment({ text: comment, productId: product?.data?._id })
          }
        >
          ارسال
        </button>
      </div>
      <div className="w-full flex flex-col gap-4">
        <h1 className="font-semibold text-2xl">نظرات کاربران</h1>
        {comments?.data?.map((comment) => (
          <div className="text-white bg-red-500 p-4" key={comment?._id}>
            <div className="flex gap-10 p-2">
              <p>{comment.user.userName}</p>
              <p>
                تاریخ :{" "}
                {new Date(comment.createdAt).toLocaleDateString("fa-IR")}
              </p>
            </div>
            <p>{comment.text}</p>
          </div>
        ))}
      </div> */
}
