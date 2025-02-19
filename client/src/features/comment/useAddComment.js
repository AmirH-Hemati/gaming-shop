import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addComment as addCommentAPI } from "../../services/apiComment";
export function useAddComment() {
  const queryClient = useQueryClient();
  const { mutate: addComment, isPending } = useMutation({
    mutationFn: ({ text, productId }) => addCommentAPI({ text, productId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comment"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { addComment, isPending };
}
