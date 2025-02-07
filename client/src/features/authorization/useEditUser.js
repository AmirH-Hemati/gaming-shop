import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { editUser as editUserAPI } from "../../services/apiUser";

export function useEditUser() {
  const queryClient = useQueryClient();
  const { mutate: editUser } = useMutation({
    mutationFn: (formData) => editUserAPI(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("successfully updated user ");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.response.data.message);
    },
  });
  return { editUser };
}
