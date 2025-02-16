import { MoreSquare } from "iconsax-react";
import { useGetAllOrders } from "./useGetAllOrders";

function Orders() {
  const { orders } = useGetAllOrders();
  console.log(orders);
  return (
    <div className="flex flex-col gap-6 mt-10">
      <h1 className="font-semibold text-2xl">سفارشات شما</h1>
      <ul className="flex flex-col gap-3.5">
        <li className="p-6 rounded-sm grid grid-cols-6 gap-5 items-center font-semibold border-2 border-black/40">
          <p>عکس</p>
          <p>نام </p>
          <p>قیمت </p>
          <p> شماره پیگیری </p>
          <p> وضعیت </p>
          <p> </p>
        </li>
        {orders?.data?.map((order) => (
          <li
            key={order._id}
            className="p-6 rounded-sm items-center grid grid-cols-6 gap-5 border-2 border-black/40"
          >
            <img
              className="w-20 rounded-sm aspect-square"
              src={order.products[0].image}
              alt=""
            />
            <p>{order.products[0].title}</p>
            <p>{order.amount}</p>
            <p>{order.ref_id}</p>
            <p>{order.orderStatus}</p>
            <MoreSquare
              size="32"
              color="black"
              className="mr-auto cursor-pointer"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
