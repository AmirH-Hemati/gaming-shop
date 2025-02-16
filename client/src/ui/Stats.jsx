import { Profile2User, ShoppingBag } from "iconsax-react";
import Stat from "./Stat";
import { useGetProducts } from "../features/products/useGetProducts";
import { useGetAllUsers } from "../features/admin/useGetAllUsers";
import { useGetAllOrders } from "../features/admin/useGetAllOrders";

function Stats() {
  const { products } = useGetProducts();
  const { users } = useGetAllUsers();
  const { orders } = useGetAllOrders();
  console.log(orders);
  const succsussProduct = orders?.data?.filter(
    (order) => order.paymentStatus == "paid"
  ).length;
  const unSuccsussProduct = orders?.data?.filter(
    (order) => order.paymentStatus !== "paid"
  ).length;
  return (
    <div className="flex flex-wrap gap-4">
      <Stat
        title={`محصولات`}
        value={products?.data?.length}
        icon={<ShoppingBag size="32" color="#192938" />}
        color={`#6258f5d3`}
      />
      <Stat
        title={`کاربران`}
        value={users?.data?.length}
        icon={<Profile2User size="32" color="#192938" />}
        color={`#4aec83`}
      />
      <Stat
        title={`سفارشات موفق`}
        value={succsussProduct}
        icon={<ShoppingBag size="32" color="#192938" />}
        color={`#94e400`}
      />
      <Stat
        title={`سفارشات ناموفق`}
        value={unSuccsussProduct}
        icon={<ShoppingBag size="32" color="#192938" />}
        color={`#0d92f8`}
      />
    </div>
  );
}

export default Stats;
