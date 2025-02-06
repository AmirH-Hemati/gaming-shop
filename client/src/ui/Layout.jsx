import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import { useCurrentUser } from "../features/authorization/useCurrentUse";
import TopMain from "./TopMain";

function Layout() {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const { user } = useCurrentUser();
  console.log(user);
  return (
    <div className="w-full bg-[#192938] h-screen overflow-hidden flex p-4 gap-4 text-white">
      <Header isActiveMenu={isActiveMenu} />
      <main
        className={` w-full md:w-[80%] relative overflow-auto ${
          isActiveMenu ? "md:w-[92%] " : "md:w-[80%] "
        }bg-[#192938] h-full rounded-sm shadow-custom p-4`}
      >
        <TopMain
          isActiveMenu={isActiveMenu}
          setIsActiveMenu={setIsActiveMenu}
        />
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
