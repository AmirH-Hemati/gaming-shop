import { useQuery } from "@tanstack/react-query";
import { getProductsByFilter } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";

export function useGetProductsByFilter() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const { data: product, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProductsByFilter(search),
  });
  console.log(product);
  return { product, isLoading };
}
