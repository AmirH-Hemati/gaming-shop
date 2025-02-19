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
  console.log(comments?.data);
  if (isPending) {
    return <Loading />;
  }
  let allImage;
  if (product?.data?.images && product?.data?.image)
    allImage = [product.data.image, ...product.data.images];
  return (
    <div className="box-border  w-full h-full shadow-custom  flex flex-col items-center pt-3 overflow-auto">
      <div className="w-full h-1/2 md:w-[65%]  rounded-sm flex flex-col md:flex-row-reverse gap-2">
        <img
          src={activeImage}
          alt=""
          className="w-full h-full md:w-[80%] object-cover rounded-sm"
        />
        <div className=" w-full h-full  p-2  md:w-[20%] flex flex-row   md:flex-col gap-1 ">
          {allImage?.map((image, index) => (
            <div
              key={index}
              style={{ height: `${100 / allImage.length}%` }}
              onClick={() => setActiveImage(image)}
            >
              <img
                src={image}
                className={`w-36  h-full  object-cover border-6 ${
                  activeImage == image ? "border-[#192938]" : "border-[#0998A8]"
                } `}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex h-1/2 flex-col w-full md:w-[65%] my-6  justify-between">
        <div className="flex justify-between items-center w-full">
          <h1 className="md:text-2xl text-lg font-bold">
            {product?.data?.title}
          </h1>
          <AddToFavorite product={product?.data} />
        </div>
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
      <div className="flex flex-col w-full p-4 gap-4">
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
              <p>تاریخ : {new Date(comment.createdAt).toLocaleDateString("fa-IR")}</p>
            </div>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;
