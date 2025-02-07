import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changePassword as changePasswordAPI } from "../../services/apiAuth";
import { toast } from "react-toastify";

export function useChangePassword() {
  const queryClient = useQueryClient();
  const { mutate: changePassword } = useMutation({
    mutationFn: ({ email, password, newPassword }) =>
      changePasswordAPI({ email, password, newPassword }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("successfully changed password");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { changePassword };
}
