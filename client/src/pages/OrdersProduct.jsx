import { Link } from "react-router-dom";
import { useGetMyOrders } from "../features/products/useGetMyOrders";
import { formatNumber } from "../utils/formatNumber";

function OrdersProduct() {
  const { orders } = useGetMyOrders();
  console.log(orders?.data);
  return (
    <div className="flex flex-col gap-10 mt-10">
      <h1 className="font-semibold text-2xl">سفارشات شما</h1>

      <ul className="flex flex-col gap-3.5">
        <li className="p-6 rounded-sm grid grid-cols-6 gap-5 items-center font-semibold border-2 border-white/40">
          <p>عکس</p>
          <p>نام </p>
          <p>قیمت </p>
          <p> شماره پیگیری </p>
          <p> وضعیت </p>
          <p> جزعیات </p>
        </li>
        {orders?.data?.map((order) => (
          <li
            key={order._id}
            className="p-6 rounded-sm items-center grid grid-cols-6 gap-5 border-2 border-white/40"
          >
            <img
              className="w-20 rounded-sm aspect-square"
              src={order.products[0]?.image}
              alt=""
            />
            <p>{order.products[0]?.title}</p>
            <p>{formatNumber(order?.amount)}تومان</p>
            <p>{order?.ref_id}</p>
            <p>{order?.orderStatus}</p>
            <Link to={`/orderProduct/${order?.ref_id}`}>
              <p>...</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdersProduct;
