import { useMutation, useQueryClient } from "@tanstack/react-query";
import { register as registerAPI } from "../../services/apiAuth";

export async function useRegister() {
  const queryClient = useQueryClient();
  const { mutate: register, isLoading } = useMutation({
    mutationFn: ({ userName, email, password }) =>
      registerAPI({ userName, email, password }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      console.log(err.message);
    },
  });
  return { register, isLoading };
}
