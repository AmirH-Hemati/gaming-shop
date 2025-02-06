import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";

export function useGetProducts() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: getProducts,
  });
  return { products, isLoading };
}
