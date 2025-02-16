import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "../../services/apiOrders";
import { useSearchParams } from "react-router-dom";

export function useGetAllOrders() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("searchOrders") || "";
  const { data: orders, isPending } = useQuery({
    queryKey: ["orders", search],
    queryFn: () => getAllOrders(search),
  });
  return { orders, isPending };
}
