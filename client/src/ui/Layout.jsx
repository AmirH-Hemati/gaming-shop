import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="w-full bg-[#192938] h-screen flex p-4 gap-4 text-white">
      <Header />
      <main className="w-[80%] bg-[#192938] h-full rounded-sm [box-shadow:-5px_-5px_15px_hsla(0,0%,100%,.1),5px_5px_15px_rgba(0,0,0,.35)]">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
