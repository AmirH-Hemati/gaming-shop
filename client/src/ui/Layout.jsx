import { Outlet } from "react-router-dom";

import { useState } from "react";
import TopMain from "./TopMain";
import UserMenu from "./UserMenu";
import data from "../data/navListData";
import Sidebar from "./SideBar";

function Layout() {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [first, setfirst] = useState(false);
  function close() {
    setfirst(false);
  }
  return (
    <div className="flex w-full h-screen bg-[#192938]  overflow-hidden  p-4 gap-4 text-white">
      <Sidebar isActiveMenu={isActiveMenu} data={data} color={`bg-[#192938]`} />
      <main
        className={`h-full w-full overflow-auto ${
          isActiveMenu ? "md:w-[92%] " : "md:w-[80%] "
        }bg-[#192938] h-full rounded-sm shadow-custom p-4`}
      >
        <TopMain
          isActiveMenu={isActiveMenu}
          setIsActiveMenu={setIsActiveMenu}
          setfirst={setfirst}
        />
        <UserMenu first={first} close={close} />
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
