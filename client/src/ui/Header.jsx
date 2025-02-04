import { useState } from "react";

import NavListItem from "./NavListItem";
import data from "../data/navListData";
function Header({ isActive }) {
  const [navLinkData, setNavLinkData] = useState(data);
  return (
    <aside
      className={`relative ${
        isActive ? "w-[8%]" : "w-[20%]"
      } duration-500   overflow-hidden  flex flex-col gap-6 h-full bg-[#192938] shadow-custom rounded-sm p-4`}
    >
      <p className="text-2xl font-bold">logo</p>
      <ul className="flex flex-col gap-4  ">
        {navLinkData.map((item) => (
          <NavListItem key={item.id} item={item} isActive={isActive} />
        ))}
      </ul>
    </aside>
  );
}

export default Header;
