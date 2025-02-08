import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProducts";
import { useParams } from "react-router-dom";

export function useGetProduct() {
  const { id } = useParams();
  const { data: product, isPending } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });
  return { product, isPending };
}
