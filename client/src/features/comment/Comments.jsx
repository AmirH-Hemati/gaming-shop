import { useGetComments } from "./useGetComments";

function Comments({ id }) {
  const { comments } = useGetComments(id);
  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="font-semibold text-2xl text-[#0998a8]">نظرات کاربران</h1>
      <ul className="flex flex-col gap-2">
        {comments?.data?.map((comment) => (
          <li className="text-white  p-5 space-y-8 shadow-custom rounded-sm" key={comment?._id}>
            <div className="flex gap-10 ">
              <p className="font-semibold">{comment.user.userName}</p>
              <p className="text-white/70">
                تاریخ :{" "}
                {new Date(comment.createdAt).toLocaleDateString("fa-IR")}
              </p>
            </div>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
