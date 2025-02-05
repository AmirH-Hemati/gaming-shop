import { Outlet } from "react-router-dom";
import Header from "./Header";
import { HambergerMenu, Heart, ShoppingCart } from "iconsax-react";
import { useState } from "react";
import { useAddToCart } from "../context/ShoppingContext";

function Layout() {
  const { totalQty } = useAddToCart();
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  return (
    <div className="w-full bg-[#192938] h-screen overflow-hidden flex p-4 gap-4 text-white">
      <Header isActiveMenu={isActiveMenu} />
      <main
        className={`overflow-y-auto relative ${
          isActiveMenu ? "w-[92%] " : "w-[80%] "
        }bg-[#192938] h-full rounded-sm shadow-custom p-4`}
      >
        <div className="w-full flex  justify-between ">
          <HambergerMenu
            size="32"
            color="white"
            onClick={() => setIsActiveMenu(!isActiveMenu)}
          />

          <div className="flex gap-4">
            <div className="relative">
              <Heart size="36" color="white" className="cursor-pointer" />
              <p className="text-sm flex items-center justify-center w-5 h-5 absolute -bottom-1 -right-1 bg-[#0998a8] p-1 rounded-full ">
                0
              </p>
            </div>
            <div className="relative">
              <ShoppingCart
                size="36"
                color="white"
                className="cursor-pointer"
              />
              <p className="text-sm flex items-center justify-center w-5 h-5 absolute -bottom-1 -right-1 bg-[#0998a8] p-1 rounded-full ">
                {totalQty()}
              </p>
            </div>
            <p>usename</p>
          </div>
        </div>

        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
