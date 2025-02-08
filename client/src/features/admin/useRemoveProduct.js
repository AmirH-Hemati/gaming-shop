import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { removeProduct as removeProductAPI } from "../../services/apiProducts";

export function useRemoveProduct() {
  const queryClient = useQueryClient();
  const { mutate: removeProduct, isPending: isRemoveing } = useMutation({
    mutationFn: (id) => removeProductAPI(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["product"],
      });
      toast.success("محصول با موفقیت حذف شد.");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { removeProduct, isRemoveing };
}
