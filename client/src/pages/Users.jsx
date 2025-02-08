import { useGetAllUsers } from "../features/admin/useGetAllUsers";

function Users() {
  const { users } = useGetAllUsers();
  console.log(users);
  return (
    <div className=" flex flex-col h-full w-full overflow-hidden  text-sm md:text-base">
      <div className="font-semibold mt-2 md:mt-8 grid grid-cols-[1fr_1fr_3fr] w-full bg-[#F9FAFB]  gap-6 rounded-t-md p-4 border-2 border-black/10">
        <p>عکس کاربر</p>
        <p className="">نام کاربری</p>
        <p className="">ایمیل</p>
      </div>

      <ul className="flex flex-col w-full h-[60%] md:h-full overflow-y-auto">
        {users?.data?.map((user) => (
          <li
            key={user?._id}
            className="grid grid-cols-[1fr_1fr_3fr] w-full bg-white  px-4 py-6 gap-6 border-2 border-black/10"
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
