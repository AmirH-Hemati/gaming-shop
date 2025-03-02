import { useGetAllUsers } from "../features/admin/useGetAllUsers";
import Loading from "../ui/Loading";

function Users() {
  const { users, isPending } = useGetAllUsers();
  if (isPending) {
    return <Loading />;
  }
  return (
    <div className="flex-1 flex flex-col  w-full overflow-hidden  text-sm md:text-base">
      <div className="font-semibold mt-2 md:mt-8 grid grid-cols-[1fr_1fr_3fr] font-semibold w-full bg-[#6366F1] text-white gap-6 rounded-t-md p-4 border-2 border-black/10">
        <p>عکس کاربر</p>
        <p className="">نام کاربری</p>
        <p className="">ایمیل</p>
      </div>

      <ul className="flex flex-col w-full h-[60%] md:h-full overflow-y-auto">
        {users?.data?.map((user) => (
          <li
            key={user?._id}
            className="odd:bg-white even:bg-[#6366F1] even:text-white font-semibold grid grid-cols-[1fr_1fr_3fr] w-full px-4 py-6 gap-6 border-2 border-black/10"
          >
            <img src={user?.avatar} alt="" className="w-20 object-cover " />
            <p className="flex items-center  truncate">{user?.userName}</p>
            <p className="flex items-center  truncate text-xs">{user?.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
