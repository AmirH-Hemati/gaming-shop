import { Outlet } from "react-router-dom";
import data from "../data/navListDataAdmin";
import Sidebar from "./Sidebar";
import TopMainAdmin from "./TopMainAdmin";
import { useState } from "react";
function LayoutAdmin() {
  const [isActiveMenu, setisActiveMenu] = useState(false);
  const togleMenu = () => setisActiveMenu((menu) => !menu);
  return (
    <div className="w-full bg-white h-screen overflow-hidden flex p-4 gap-4 text-black">
      <Sidebar
        isActiveMenu={isActiveMenu}
        data={data}
        color={`bg-white`}
        coloIcon={`black`}
      />
      <main
        className={`flex flex-col w-full ${
          isActiveMenu ? "md:w-[92%]" : "md:w-[80%]"
        } h-full shadow-custom p-4 overflow-auto `}
      >
        <TopMainAdmin isActiveMenu={isActiveMenu} onToggle={togleMenu} />
        <Outlet />
      </main>
    </div>
  );
}

export default LayoutAdmin;
