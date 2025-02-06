import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import TopMain from "./TopMain";
import { CloseSquare } from "iconsax-react";
import { useClickOutSide } from "../hooks/useClickOutSide";

function Layout() {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [first, setfirst] = useState(false);
  function close() {
    setfirst(false);
  }
  const ref = useClickOutSide(close);
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
        <div
          ref={ref}
          className={`w-[20%] h-full fixed ${
            first ? "left-0" : "-left-full"
          }  top-0 duration-500  shadow-custom bg-bg-main z-50 p-4 `}
        >
          <div className="w-full flex justify-between">
            <p>name user</p>
            <CloseSquare
              size="32"
              color="#FF8A65"
              onClick={() => setfirst(false)}
            />
          </div>
          <div className="w-full flex flex-col">
            <p>setting</p>
            <p>change password</p>
            <p>panel admin</p>
            <p>sign out</p>
          </div>
        </div>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
