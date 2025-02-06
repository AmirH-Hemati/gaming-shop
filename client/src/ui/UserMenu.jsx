import { CloseSquare } from "iconsax-react";
import { useClickOutSide } from "../hooks/useClickOutSide";
import userMenuData from "../data/userMenuData";
import NavListItem from "./NavListItem";
import { useAuth } from "../context/authContext";
import { NavLink } from "react-router-dom";
function UserMenu({ first, close }) {
  const { token, role } = useAuth();
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
      <ul className="flex flex-col">
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
