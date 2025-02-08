import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct as createProductAPI } from "../../services/apiProducts";
import { toast } from "react-toastify";

export function useCreateProduct() {
  const queryClient = useQueryClient();
  const { mutate: createProduct, isPending } = useMutation({
    mutationFn: (formData) => createProductAPI(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["product"],
      });
      toast.success("succsussfully created product");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { createProduct, isPending };
}
