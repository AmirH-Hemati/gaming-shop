import { useOrderProduct } from "../features/products/useOrderProduct";
import { formatNumber } from "../utils/formatNumber";

function OrderProduct() {
  let { order } = useOrderProduct();
  order = order?.data;
  console.log(order);
  return (
    <div className="w-4/5  mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* عنوان */}
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-3">
        جزئیات سفارش
      </h2>

      {/* وضعیت سفارش */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-700">
          <span className="font-semibold">کد رهگیری:</span> {order?.ref_id}
        </p>
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            order?.orderStatus === "canceled"
              ? "bg-red-500 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          {order?.orderStatus === "canceled" ? "لغو شده" : "تکمیل شده"}
        </span>
      </div>

      {/* اطلاعات کاربر */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">مشخصات گیرنده</h3>
        <p className="text-gray-700">{order?.userOrder?.userName}</p>
        <p className="text-gray-700">{order?.userOrder?.email}</p>
      </div>

      {/* آدرس ارسال */}
      <div className="mt-4 bg-gray-100 p-3 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800">آدرس ارسال</h3>
        <p className="text-gray-700">
          {order?.userOrder?.addresses[0]?.province} -{" "}
          {order?.userOrder?.addresses[0]?.city}
        </p>
        <p className="text-gray-700">
          {order?.userOrder?.addresses[0]?.street}
        </p>
        <p className="text-gray-700">
          کد پستی: {order?.userOrder?.addresses[0]?.postalCode}
        </p>
        <p className="text-gray-700">
          شماره تلفن همراه : {order?.userOrder?.addresses[0]?.phone}
        </p>
      </div>

      {/* لیست محصولات */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">
          محصولات خریداری‌شده
        </h3>
        {order?.products?.map((product) => (
          <div
            key={product.productId}
            className="flex items-center p-3 border-b"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="ml-4">
              <p className="font-semibold text-gray-800">{product.title}</p>
              <p className="text-gray-600">
                {product.qty} عدد - {product.price.toLocaleString()} تومان
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* مبلغ کل */}
      <div className="flex justify-between items-center mt-4 border-t pt-3">
        <p className="text-lg font-semibold text-[#192938]">مبلغ کل:</p>
        <p className="text-lg font-bold text-green-600">
          {formatNumber(order?.amount)} تومان
        </p>
      </div>

      {/* تاریخ ثبت سفارش */}
      <p className="text-sm text-gray-500 mt-2">
        تاریخ ثبت سفارش:{" "}
        {new Date(order?.createdAt).toLocaleDateString("fa-IR")}
      </p>
    </div>
  );
}

export default OrderProduct;
