import { useMutation, useQueryClient } from "@tanstack/react-query";
import { register as registerAPI } from "../../services/apiAuth";
import { toast } from "react-toastify";

export function useRegister() {
  const queryClient = useQueryClient();
  const { mutate: register, isPending } = useMutation({
    mutationFn: ({ userName, email, password }) =>
      registerAPI({ userName, email, password }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success("اکانت با موفقیت ساخته شد .");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { register, isPending };
}
