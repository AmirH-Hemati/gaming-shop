import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/apiAuth";
import { toast } from "react-toastify";

export function useLogin() {
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success("Welcome !...");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { login, isLoading };
}
