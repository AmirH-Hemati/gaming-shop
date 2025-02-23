import { MessageText } from "iconsax-react";
import { useCurrentUser } from "./useCurrentUser";
import SettingForm from "./SettingForm";

function SettingFormLayout() {
  const { user } = useCurrentUser();

  return (
    <div className="w-full shadow-custom overflow-auto h-full flex flex-col items-center p-4 text-sm">
      <div className="w-full shadow-custom flex gap-4">
        <img
          src={user?.data?.avatar}
          alt=""
          className="w-12 h-12 md:w-24 md:h-24 object-cover rounded-sm"
        />
        <div className="flex flex-col justify-evenly">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-xl">{user?.data?.userName}</p>
            <p className="bg-[#0998A8] text-gray-200 px-1 text-xs rounded-2xl">
              {user?.data?.role}
            </p>
          </div>
          <div className="flex items-center">
            <MessageText size="20" color="#fff" variant="Bold" />
            <p>ایمیل : {user?.data?.email}</p>
          </div>
        </div>
      </div>
      <SettingForm />
    </div>
  );
}

export default SettingFormLayout;
