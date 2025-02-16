import { Bag2 } from "iconsax-react";
import { useGetOrder } from "./useGetOrder";
import { formatNumber } from "../../utils/formatNumber";
import { useUpdateOrder } from "./useUpdateOrder";

function Order() {
  const { order } = useGetOrder();
  const { updateOrder } = useUpdateOrder();
  return (
    <div className="w-full h-full flex flex-col gap-6 shadow-custom p-2 rounded-sm mt-4">
      <h1 className="font-semibold text-2xl">سفارش #{order?.data.ref_id}</h1>

      <div className="bg-[#6366F1] text-white rounded-sm p-3">
        <p>
          <strong>کاربر:</strong> {order?.data?.userOrder?.email}
        </p>
        <p>
          <strong>مبلغ کل:</strong> {formatNumber(order?.data?.amount)} تومان
        </p>
        <p>
          <strong>وضعیت پرداخت:</strong>{" "}
          {order?.data?.paymentStatus === "paid"
            ? " پرداخت‌شده"
            : "پرداخت‌نشده"}
        </p>
        <p>
          <strong>وضعیت سفارش:</strong> {order?.data?.orderStatus}
        </p>
        <p>
          <strong>تاریخ سفارش:</strong>{" "}
          {new Date(order?.data?.createdAt).toLocaleString("fa-IR")}
        </p>
      </div>

      <h3 className="text-xl font-semibold mb-2">محصولات خریداری‌شده</h3>

      <div className=" divide-y-2 divide-[#6366F1] border-2 rounded-md p-4 overflow-auto h-1/2">
        {order?.data?.products.map((product) => (
          <div
            key={product.productId}
            className="flex items-center justify-between py-2"
          >
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <p className="font-semibold">{product.title}</p>
                <p>تعداد: {product.qty} عدد</p>
              </div>
            </div>
            <p className="font-semibold">
              {formatNumber(product.price * product.qty)} تومان
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <label className="block text-gray-700 font-semibold mb-2">
          وضعیت سفارش:
        </label>
        <select
          value={order?.data?.orderStatus}
          className="p-2 border rounded-md w-full"
          onChange={(e) =>
            updateOrder({ orderStatus: e.target.value, id: order?.data?._id })
          }
        >
          <option value="processing"> در حال پردازش</option>
          <option value="shipped"> ارسال‌شده</option>
          <option value="delivered"> تحویل داده‌شده</option>
          <option value="canceled"> لغو شده</option>
        </select>
      </div>
    </div>
  );
}

export default Order;
