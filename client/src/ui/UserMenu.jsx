import { CloseSquare } from "iconsax-react";
import { useClickOutSide } from "../hooks/useClickOutSide";
import userMenuData from "../data/userMenuData";
import { NavLink } from "react-router-dom";
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
      <ul className="flex flex-col">
        {userMenuData.map((item) => (
          <UserMenuItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function UserMenuItem({ item }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `w-full py-2  hover:shadow-custom ${isActive ? "shadow-custom" : ""}`
      }
      to={item.route}
    >
      <li className="flex items-center gap-2 p-3 cursor-pointer rounded-sm overflow-hidden">
        {item?.icon}
        <p>{item?.name}</p>
      </li>
    </NavLink>
  );
}
export default UserMenu;
