import { useQuery } from "@tanstack/react-query";
import { useAddToCart } from "../../context/ShoppingContext";
import { getDetailsProducts } from "../../services/apiProducts";

export async function useGetDetails() {
  const { addToCart } = useAddToCart();
  const {data} = useQuery({
    queryKey: ["products"],
    queryFn: () => getDetailsProducts(addToCart),
  });
  return {data}
}
