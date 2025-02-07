import { Game } from "iconsax-react";
import NavListItem from "./NavListItem";
function Sidebar({ isActiveMenu, data, color }) {
  return (
    <aside
      className={`${color} flex   flex-col z-50 fixed left-0 top-0 md:relative ${
        isActiveMenu ? "px-1 w-[20%] md:w-[8%]" : " w-[0%] md:w-[20%]"
      }   md:relative  duration-500   overflow-hidden shadow-custom   gap-10 h-full   rounded-sm py-4  md:p-4`}
    >
      <p className="text-2xl font-bold flex items-center ">
        <Game size="56" color="#fff" />
        <span className={`${isActiveMenu ? "hidden" : ""}`}>گیــــــــــم شاپ</span>
      </p>
      <ul className="flex flex-col gap-4  ">
        {data?.map((item) => (
          <NavListItem key={item.id} item={item} isActiveMenu={isActiveMenu} />
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
