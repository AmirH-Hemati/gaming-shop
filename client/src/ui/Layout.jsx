import { Outlet } from "react-router-dom";
import Header from "./Header";
import { HambergerMenu, Heart, ShoppingCart } from "iconsax-react";
import { useState } from "react";
import ProductItem from "./ProductItem";
import Products from "./Products";

function Layout() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="w-full bg-[#192938] h-screen overflow-hidden flex p-4 gap-4 text-white">
      <Header isActive={isActive} />
      <main
        className={`overflow-y-auto relative ${
          isActive ? "w-[92%] " : "w-[80%] "
        }bg-[#192938] h-full rounded-sm shadow-custom p-4`}
      >
        <div className="w-full flex  justify-between ">
          <HambergerMenu
            size="32"
            color="white"
            onClick={() => setIsActive(!isActive)}
          />

          <div className="flex gap-2">
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
