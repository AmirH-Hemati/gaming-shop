import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUser";

export function useGetAllUsers() {
  const { data: users, isPending } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  return { users, isPending };
}
