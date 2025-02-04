import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="w-full bg-red-500 h-screen flex p-4 gap-4">
      <Header />
      <main className="w-[80%] bg-yellow-500 h-full rounded-sm">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
