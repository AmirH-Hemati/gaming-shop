import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { myOrder } from "../../services/apiOrders";

export function useOrderProduct() {
  const { id } = useParams();
  const { data:order } = useQuery({
    queryKey: ["order", id],
    queryFn: () => myOrder(id),
  });
  return { order };
}
