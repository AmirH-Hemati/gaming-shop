import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/apiAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export function useLogin() {
  const { loginStoredToken } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
      loginStoredToken(user.data);
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success("خوش آمدیــــــد...!");
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { login, isPending };
}
