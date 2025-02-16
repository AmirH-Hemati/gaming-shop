import { useQuery } from "@tanstack/react-query";
import { myOrders } from "../../services/apiOrders";

export function useGetMyOrders() {
  const { data: orders, isPending } = useQuery({
    queryKey: ["orders"],
    queryFn: myOrders,
  });
  return { orders, isPending };
}
