import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";

export function useGetProducts() {
  const { data: products, isPending } = useQuery({
    queryKey: ["product"],
    queryFn: getProducts,
  });
  return { products, isPending };
}
