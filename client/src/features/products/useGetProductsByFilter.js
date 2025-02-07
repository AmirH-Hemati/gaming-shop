import { useQuery } from "@tanstack/react-query";
import { getProductsByFilter } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";

export function useGetProductsByFilter() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const { data: products, isLoading } = useQuery({
    queryKey: ["product", search],
    queryFn: () => getProductsByFilter(search),
  });
  return { products, isLoading };
}
