import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
export function useCurrentUser() {
  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return { user, isPending };
}
