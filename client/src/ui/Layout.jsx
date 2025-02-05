import { Outlet } from "react-router-dom";
import Header from "./Header";
import { HambergerMenu, Heart, ShoppingCart } from "iconsax-react";
import { useState } from "react";
import { useAddToCart } from "../context/ShoppingContext";
import { useAddToFavorites } from "../context/FavorietsContext";

function Layout() {
  const { totalQty } = useAddToCart();
  const { totalFavorites } = useAddToFavorites();
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  return (
    <div className="w-full bg-[#192938] h-screen overflow-hidden flex p-4 gap-4 text-white">
      <Header isActiveMenu={isActiveMenu} />
      <main
        className={`overflow-y-auto w-full relative ${
          isActiveMenu ? "w-[92%] " : "w-[80%] "
        }bg-[#192938] h-full rounded-sm shadow-custom p-4`}
      >
        <div
          className={`w-full flex  justify-between duration-500  ${
            isActiveMenu ? "translate-x-4 px-4 md:px-0 md:translate-x-0" : "translate-x-0"
          } `}
        >
          <HambergerMenu
            size="32"
            color="white"
            onClick={() => setIsActiveMenu(!isActiveMenu)}
          />

          <div className="flex gap-2 md:gap-4">
            <div className="relative">
              <Heart size="26" color="white" className="cursor-pointer" />
              <p className="text-sm flex items-center justify-center w-5 h-5 absolute -bottom-1 -right-1 bg-[#0998a8] p-1 rounded-full ">
                {totalFavorites()}
              </p>
            </div>
            <div className="relative">
              <ShoppingCart
                size="26"
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
