import { useState } from "react";

import NavListItem from "./NavListItem";
import data from "../data/navListData";
function Header({ isActiveMenu }) {
  const [navLinkData, setNavLinkData] = useState(data);
  return (
    <aside
      className={`relative ${
        isActiveMenu ? "w-[8%]" : "w-[20%]"
      } duration-500   overflow-hidden  flex flex-col gap-6 h-full bg-[#192938] shadow-custom rounded-sm p-4`}
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
