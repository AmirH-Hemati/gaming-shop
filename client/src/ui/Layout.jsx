import { Outlet } from "react-router-dom";
import Header from "./Header";
import { HambergerMenu, Heart, ShoppingCart } from "iconsax-react";

function Layout() {
  return (
    <div className="w-full bg-[#192938] h-screen flex p-4 gap-4 text-white">
      <Header />
      <main className="w-[80%] bg-[#192938] h-full rounded-sm shadow-custom">
        <div className="w-full flex  justify-between">
          <HambergerMenu size="32" color="white" />
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
