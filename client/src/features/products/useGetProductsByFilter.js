import { useQuery } from "@tanstack/react-query";
import { getProductsByFilter } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";

export function useGetProductsByFilter() {
  const [searchParams] = useSearchParams();
  const categories = searchParams.get("categories") || "";
  const search = searchParams.get("search") || "";
  const { data: products, isPending } = useQuery({
    queryKey: ["product", categories, search],
    queryFn: () => getProductsByFilter({ categories, search }),
  });
  return { products, isPending };
}
