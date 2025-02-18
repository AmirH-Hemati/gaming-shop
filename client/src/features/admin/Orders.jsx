import { More } from "iconsax-react";
import { useGetAllOrders } from "./useGetAllOrders";
import { Link } from "react-router-dom";
import { formatNumber } from "../../utils/formatNumber";
import Search from "../../ui/Search";

function Orders() {
  const { orders } = useGetAllOrders();
  console.log(orders);
  if (orders?.data.length == 0) {
    return <h1 className="font-semibold text-2xl">سفارشی وجود ندارد.</h1>;
  }
  return (
    <div className="w-full h-full flex flex-col gap-6 mt-10 overflow-hidden">
      <div className="flex w-full justify-between">
        <h1 className="font-semibold text-2xl">سفارشات شما</h1>
        <Search filedSearch="searchOrders" placeholder={`جستجو کنید`} />
      </div>
      <ul className="flex flex-col h-3/4 overflow-auto">
        <li className="bg-[#6366F1] text-white p-6 rounded-t-sm grid grid-cols-7 gap-5 items-center font-semibold ">
          <p>کد سفارش</p>
          <p>کاربر</p>
          <p>مبلغ کل </p>
          <p>نام محصول</p>
          <p> وضعیت سفارش </p>
          <p>تاریخ سفارش</p>
          <p> </p>
        </li>
        {orders?.data?.map((order) => (
          <li
            key={order._id}
            className="p-3 font-semibold rounded-b-sm items-center grid grid-cols-7 gap-5 border-2 border-black/40"
          >
            <p>{order.ref_id ? order.ref_id : "وجود ندارد"}</p>
            <p>{order.userOrder.email}</p>
            <p>{formatNumber(order.amount)}</p>
            <p>{order.products[0].title}</p>
            <p>
              {order.paymentStatus == "paid" ? "پرداخت شده" : "پرداخت نشده"}
            </p>
            <p>{new Date(order.createdAt).toLocaleDateString("fa-IR")}</p>
            <Link to={`/orders/${order._id}`}>
              <More
                size="32"
                color="black"
                className="mr-auto cursor-pointer"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
