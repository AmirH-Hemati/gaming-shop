import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import TopMain from "./TopMain";
import UserMenu from "./UserMenu";

function Layout() {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [first, setfirst] = useState(false);
  function close() {
    setfirst(false);
  }
  return (
    <div className="w-full bg-[#192938] h-screen overflow-hidden flex p-4 gap-4 text-white">
      <Header isActiveMenu={isActiveMenu} />
      <main
        className={` w-full overflow-auto ${
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
