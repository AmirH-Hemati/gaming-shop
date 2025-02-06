

import NavListItem from "./NavListItem";
import data from "../data/navListData";
function Header({ isActiveMenu, data }) {
  return (
    <aside
      className={`flex   flex-col z-50 fixed left-0 top-0 md:relative ${
        isActiveMenu ? "px-1 w-[20%] md:w-[8%]" : " w-[0%] md:w-[20%]"
      }   md:relative  duration-500   overflow-hidden    gap-6 h-full bg-[#192938] shadow-custom rounded-sm py-4  md:p-4`}
    >
      <p className="text-2xl font-bold">logo</p>
      <ul className="flex flex-col gap-4  ">
        {data?.map((item) => (
          <NavListItem key={item.id} item={item} isActiveMenu={isActiveMenu} />
        ))}
      </ul>
    </aside>
  );
}

export default Header;
