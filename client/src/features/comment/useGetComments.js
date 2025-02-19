import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../services/apiComment";

export function useGetComments(id) {
  const { data: comments } = useQuery({
    queryKey: ["comment", id],
    queryFn: () => getComments(id),
    enabled: !!id,
  });
  return { comments };
}
