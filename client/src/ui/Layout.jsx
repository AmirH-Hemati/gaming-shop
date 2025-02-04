import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="w-full bg-[#192938] h-screen flex p-4 gap-4 text-white">
      <Header />
      <main className="w-[80%] bg-[#192938] h-full rounded-sm shadow-custom">
        <div>
          
        </div>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
