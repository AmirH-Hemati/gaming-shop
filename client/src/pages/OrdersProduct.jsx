import { useGetMyOrders } from "../features/products/useGetMyOrders";

function OrdersProduct() {
  const { orders } = useGetMyOrders();
  console.log(orders);
  return (
    <div className="flex flex-col gap-4">
      <h1>سفارشات شما</h1>

      <ul className="flex flex-col gap-3.5">
        <li className="p-6 rounded-sm grid grid-cols-5 gap-5 items-center font-semibold border-2 border-white/40">
          <p> </p>
          <p>نام </p>
          <p>قیمت </p>
          <p> شماره پیگیری </p>
          <p> وضعیت </p>
        </li>
        {orders?.data?.map((order) => (
          <li
            key={order._id}
            className="p-6 rounded-sm items-center grid grid-cols-5 gap-5 border-2 border-white/40"
          >
            <img className="w-20 rounded-sm aspect-square" src={order.products[0].image} alt="" />
            <p>{order.products[0].title}</p>
            <p>{order.amount}</p>
            <p>{order.ref_id}</p>
            <p>{order.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdersProduct;
