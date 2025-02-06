import { CloseSquare } from "iconsax-react";
import { useClickOutSide } from "../hooks/useClickOutSide";

function UserMenu({ first, close }) {
  const ref = useClickOutSide(close);
  return (
    <div
      ref={ref}
      className={`w-[20%] h-full fixed ${
        first ? "left-0" : "-left-full"
      }  top-0 duration-500  shadow-custom bg-bg-main z-50 p-4 `}
    >
      <div className="w-full flex justify-between">
        <p>name user</p>
        <CloseSquare size="32" color="#FF8A65" onClick={close} />
      </div>
      <div className="w-full flex flex-col">
        <p>setting</p>
        <p>change password</p>
        <p>panel admin</p>
        <p>sign out</p>
      </div>
    </div>
  );
}

export default UserMenu;
