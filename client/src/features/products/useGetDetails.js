import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getDetailsProducts } from "../../services/apiProducts";

export  function useGetDetails() {
  const queryClient = useQueryClient();
  const { mutate, data: products } = useMutation({
    mutationFn: (addToCart) => getDetailsProducts(addToCart),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { mutate, products };
}
