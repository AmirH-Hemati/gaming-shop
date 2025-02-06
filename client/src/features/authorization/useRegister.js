import { useMutation, useQueryClient } from "@tanstack/react-query";
import { register as registerAPI } from "../../services/apiAuth";
import { toast } from "react-toastify";

export function useRegister() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: ({ userName, email, password }) =>
      registerAPI({ userName, email, password }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success("succsessfully created account");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  console.log(mutate);
  return mutate;
}
