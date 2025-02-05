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
            <Heart size="32" color="white" />
            <ShoppingCart size="32" color="white" />
            <p>usename</p>
          </div>
        </div>

        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
