import { useState } from "react";

import NavListItem from "./NavListItem";
import data from "../data/navListData";
function Header({ isActiveMenu }) {
  const [navLinkData, setNavLinkData] = useState(data);
  return (
    <aside
      className={`flex z-50  md:flex flex-col fixed left-0 top-0 md:relative ${
        isActiveMenu ? " w-[20%] md:w-[8%]" : " w-[0%] md:w-[20%]"
      }   md:relative  duration-500   overflow-hidden    gap-6 h-full bg-[#192938] shadow-custom rounded-sm py-4 px-1 md:p-4`}
    >
      <p className="text-2xl font-bold">logo</p>
      <ul className="flex flex-col gap-4  ">
        {navLinkData.map((item) => (
          <NavListItem key={item.id} item={item} isActiveMenu={isActiveMenu} />
        ))}
      </ul>
    </aside>
  );
}

export default Header;
