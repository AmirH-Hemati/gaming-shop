import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUser";

export function useGetAllUsers() {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  return { users };
}
