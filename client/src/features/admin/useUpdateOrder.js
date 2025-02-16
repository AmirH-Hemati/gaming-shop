import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrder as updateOrderAPI } from "../../services/apiOrders";

export function useUpdateOrder() {
  const queryClient = useQueryClient();
  const { mutate: updateOrder, isPending } = useMutation({
    mutationFn: ({ orderStatus, id }) => updateOrderAPI({ orderStatus, id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
  return { updateOrder, isPending };
}
