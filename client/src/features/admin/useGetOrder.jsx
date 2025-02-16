import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../../services/apiOrders";
import { useParams } from "react-router-dom";

export function useGetOrder() {
  const { id } = useParams();
  const { data: order } = useQuery({
    queryKey: ["order"],
    queryFn: () => getOrder(id),
  });
  return { order };
}
