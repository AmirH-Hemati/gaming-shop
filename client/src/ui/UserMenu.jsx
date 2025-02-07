import { CloseSquare, LogoutCurve } from "iconsax-react";
import { useClickOutSide } from "../hooks/useClickOutSide";
import userMenuData from "../data/userMenuData";
import NavListItem from "./NavListItem";
import { useAuth } from "../context/authContext";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../features/authorization/useCurrentUse";
function UserMenu({ first, close }) {
  const { user } = useCurrentUser();
  const { token, role } = useAuth();
  const ref = useClickOutSide(close);
  return (
    <div
      ref={ref}
      className={`w-[80%] md:w-[20%] h-full flex flex-col fixed ${
        first ? "left-0" : "-left-full"
      }  top-0 duration-500  shadow-custom bg-bg-main z-50 p-4 `}
    >
      <div className="w-full flex items-center  justify-between">
        <p className="font-semibold">{user?.data?.userName}</p>
        <CloseSquare
          size="32"
          color="#fff"
          variant="Bold"
          onClick={close}
          className="cursor-pointer"
        />
      </div>
      <ul className="flex flex-col flex-1 mt-6 ">
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
              <p>Panel Admin</p>
            </li>
          </NavLink>
        )}

        <li className=" mt-auto mb-6 flex items-center gap-2 p-3 cursor-pointer rounded-sm  hover:shadow-custom">
          <LogoutCurve size="24" color="#fff" />
          <span>Log Out</span>
        </li>
      </ul>
    </div>
  );
}
export default UserMenu;

// function UserMenuItem({ item }) {
//   return (
//     <NavLink
//       className={({ isActive }) =>
//         `w-full py-2  hover:shadow-custom ${isActive ? "shadow-custom" : ""}`
//       }
//       to={item.route}
//     >
//       <li className="flex items-center gap-2 p-3 cursor-pointer rounded-sm overflow-hidden">
//         {item?.icon}
//         <p>{item?.name}</p>
//       </li>
//     </NavLink>
//   );
// }
