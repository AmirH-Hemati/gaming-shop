import { ArrowDown2, ArrowUp2, Trash } from "iconsax-react";
import { useGetDetails } from "../features/products/useGetDetails";
import { useAddToCart } from "../context/ShoppingContext";
import { useEffect } from "react";
import Heading from "../ui/Heading";
import ProductNotExist from "../ui/ProductNotExist";
import { formatNumber } from "../utils/formatNumber";
import Loading from "../ui/Loading";
import axiosInstance from "../services/axiosInstance";

function ShopCart() {
  const {
    handelIncreaseProduct,
    handelDecreaseProduct,
    addToCart,
    removeProduct,
  } = useAddToCart();
  const { mutate, products, isPending } = useGetDetails();

  useEffect(() => {
    mutate(addToCart);
  }, [addToCart, mutate]);
  if (isPending) {
    return <Loading />;
  }
  const totalPrice = products?.data?.reduce(
    (cur, sum) => cur + sum.price * sum.qty,
    0
  );
  const totalItems = products?.data?.length;
  if (products?.data?.length < 1) {
    return <ProductNotExist>سبد خرید شما خالی است </ProductNotExist>;
  }
  async function handlePayment() {
    const response = await axiosInstance.post(
      "http://localhost:1212/api/payment",
      {
        amount: totalPrice,
        products: products?.data,
      }
    );
    if (response.data && response.status == 200) {
      window.location.href = response.data.url;
    }
  }

  return (
    <div className="w-full md:p-6  overflow-hidden ">
      <Heading text={`سبد خرید`} />
      <ul className=" w-full max-h-[80%] flex flex-col py-2  md:p-4 gap-7 items-center  rounded-md overflow-y-auto ">
        {products?.data?.map((product) => (
          <li
            key={product?._id}
            className="  bg-bg-main md:p-2 w-full gap-4 rounded-sm shadow-custom flex justify-center   text-white"
          >
            <img
              src={product?.image}
              alt=""
              className=" md:w-1/5 w-1/4  object-cover"
            />

            <div className=" items-center w-3/4 md:w-4/5 p-1 flex justify-between text-base md:text-lg">
              <div>
                <p className="  font-semibold md:text-lg text-base">
                  {product?.title}
                </p>
                <p className="text-sm md:text-base">
                  {formatNumber(product?.price)}
                  <span className="text-xs text-gray-400">تومان</span>
                </p>
              </div>

              <div className="flex  items-center gap-2 md:gap-3">
                <span className="text-base md:text-base">{product?.qty}</span>
                <div className="flex flex-col">
                  <ArrowUp2
                    size="24"
                    color="#fff"
                    variant="Bold"
                    className="cursor-pointer"
                    onClick={() => handelIncreaseProduct(product?._id)}
                  />
                  <ArrowDown2
                    size="24"
                    color="#fff"
                    variant="Bold"
                    className="cursor-pointer"
                    onClick={() => handelDecreaseProduct(product?._id)}
                  />
                </div>
                <Trash
                  size="24"
                  color="#fff"
                  variant="Bold"
                  className="cursor-pointer"
                  onClick={() => removeProduct(product?._id)}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex  justify-between items-center w-full text-white md:text-xl md:p-6">
        <p>تعداد محصولات : {totalItems}</p>
        <p>
          مجموع پرداختی : {formatNumber(totalPrice)}{" "}
          <span className="text-xs text-gray-400">تومان</span>
        </p>
        <button
          onClick={handlePayment}
          className="px-6 py-3 bg-bg-main shadow-custom rounded-sm cursor-pointer text-base"
        >
          پرداخت
        </button>
      </div>
    </div>
  );
}

export default ShopCart;
