import { useMutation, useQueryClient } from "@tanstack/react-query";
import { register as registerAPI } from "../../services/apiAuth";

export  function useRegister() {
  const queryClient = useQueryClient();
  const { mutate: register, isLoading } = useMutation({
    mutationFn: ({ userName, email, password }) =>
      registerAPI({ userName, email, password }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      console.log("ok");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { register, isLoading };
}
