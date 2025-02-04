import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="w-full bg-red-500 h-screen flex">
      <Header />
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
