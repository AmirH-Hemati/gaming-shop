import { CloseSquare, LogoutCurve, UserEdit } from "iconsax-react";
import { useClickOutSide } from "../hooks/useClickOutSide";
import userMenuData from "../data/userMenuData";
import NavListItem from "./NavListItem";
import { useAuth } from "../context/authContext";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../features/authorization/useCurrentUser";
function UserMenu({ first, close }) {
  const { user } = useCurrentUser();
  const { token, role, logout } = useAuth();
  const ref = useClickOutSide(close);
  return (
    <div
      ref={ref}
      className={`w-[80%] md:w-[20%] h-full flex flex-col fixed ${
        first ? "right-0" : "-right-full"
      }  top-0 duration-500  shadow-custom bg-bg-main z-50 p-4 `}
    >
      <div className="w-full flex items-center  justify-between">
        <div className="flex items-center gap-2">
          <img
            src={user?.data?.avatar}
            className="w-8 h-8 rounded-full"
            alt=""
          />
          <p className="text-lg font-semibold">{user?.data?.userName}</p>
        </div>
        <CloseSquare
          size="32"
          color="#fff"
          variant="Bold"
          onClick={close}
          className="cursor-pointer"
        />
      </div>
      <ul className="flex flex-col flex-1 mt-8 gap-6 ">
        {userMenuData.map((item) => (
          <NavListItem key={item.id} item={item} />
        ))}

        {token && role == "admin" && (
          <NavLink
            to={`/admin`}
            className={({ isActive }) =>
              `hover:shadow-custom ${isActive ? "shadow-custom" : ""}`
            }
          >
            <li className="flex items-center gap-2 p-3 cursor-pointer rounded-sm overflow-hidden">
              <UserEdit size="32" color="#fff" variant="Bold" />
              <p>پنل ادمین</p>
            </li>
          </NavLink>
        )}

        <li
          onClick={logout}
          className=" mt-auto mb-6 flex items-center gap-2 p-3 cursor-pointer rounded-sm  hover:shadow-custom"
        >
          <LogoutCurve size="24" color="#fff" />
          <span>خروج از حساب</span>
        </li>
      </ul>
    </div>
  );
}
export default UserMenu;
