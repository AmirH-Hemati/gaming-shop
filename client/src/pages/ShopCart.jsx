import { ArrowDown2, ArrowUp2, Trash } from "iconsax-react";
import { useGetDetails } from "../features/products/useGetDetails";
import { useAddToCart } from "../context/ShoppingContext";
import { useEffect } from "react";

function ShopCart() {
  const {
    handelIncreaseProduct,
    handelDecreaseProduct,
    addToCart,
    removeProduct,
  } = useAddToCart();
  const { mutate, products } = useGetDetails();

  useEffect(() => {
    mutate(addToCart);
  }, [addToCart, mutate]);

  const totalPrice = products?.data?.reduce((cur, sum) => cur + sum.price, 0);
  const totalItems = products?.data?.length;
  return (
    <div className="w-full md:p-6 ">
      <ul className=" w-full max-h-[70%] flex flex-col  md:p-4 gap-7 items-center  rounded-md overflow-y-auto ">
        {products?.data?.map((product) => (
          <li
            key={product?._id}
            className="  bg-bg-main p-2 w-full gap-4 rounded-sm shadow-custom flex justify-center   text-white"
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
                <p className="text-sm md:text-base">{product?.price}</p>
              </div>

              <div className="flex  items-center gap-2 md:gap-3">
                <span className="text-base md:text-base">{product?.qty}</span>
                <div className="flex flex-col">
                  <ArrowUp2
                    size="24"
                    color="#fff"
                    variant="Bold"
                    className="cursor-pointer"
                    onClick={() => {
                      console.log(product?._id);
                      handelIncreaseProduct(product?._id);
                    }}
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

      <div className="flex justify-between items-center w-full text-white text-xl p-6">
        <p>Total Items : {totalItems}</p>
        <p>Total Price : {totalPrice}</p>
        <button className="p-2 bg-bg-main shadow-custom rounded-sm cursor-pointer text-base">
          Payment
        </button>
      </div>
    </div>
  );
}

export default ShopCart;
