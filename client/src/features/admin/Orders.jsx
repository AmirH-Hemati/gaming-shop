import { Trash } from "iconsax-react";
import { useGetAllOrders } from "./useGetAllOrders";

function Orders() {
  const { orders } = useGetAllOrders();
  console.log(orders);
  return (
    <div className="flex-1 flex flex-col  w-full overflow-hidden  text-sm md:text-base text-[#192938] font-semibold">
      <div className="w-full font-semibold md:mt-8 grid grid-cols-[1fr_2fr_1fr_1fr] gap-3  bg-[#edeff0]  md:gap-6 rounded-t-md p-4 border-2 border-black/10">
        <p>عکس</p>
        <p>نام محصول</p>
        <p>قیمت</p>
        <p>تنظیمات</p>
      </div>
      <ul className="  w-full flex flex-col overflow-y-auto h-full md:h-full    ">
        {orders?.data?.map((order) => (
          <li
            key={order?._id}
            className="odd:bg-white even:bg-[#edeff0] grid grid-cols-[1fr_2fr_1fr_1fr] gap-3 w-full   px-4 py-6 md:gap-6 border-2 border-black/10"
          >
            <img src={order?.image} alt="" className="w-20  object-cover" />
            <p className="truncate flex items-center">{order?.title}</p>
            <div className="flex items-center gap-2 md:gap-7"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
