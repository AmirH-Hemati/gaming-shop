import { NavLink } from "react-router-dom";

function NavListItem({ item, isActiveMenu }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `hover:shadow-custom ${isActive ? "shadow-custom" : ""}`
      }
      to={item.route}
    >
      <li className="flex items-center gap-2 p-3 cursor-pointer rounded-sm overflow-hidden">
        {item?.icon}
        <p className={`${isActiveMenu ? "hidden" : ""}`}>{item?.name}</p>
      </li>
    </NavLink>
  );
}

export default NavListItem;
