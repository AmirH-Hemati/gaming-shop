import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProduct as editProductAPI } from "../../services/apiProducts";
import { toast } from "react-toastify";

export function useEditProduct() {
  const queryClient = useQueryClient();
  const { mutate: editProduct, isPending } = useMutation({
    mutationFn: ({ id, formData }) => editProductAPI({ id, formData }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["product"],
      });
      toast.success("محصول با موفقیت بروزرسانی شد .");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { editProduct, isPending };
}
