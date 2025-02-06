import { Outlet } from "react-router-dom";
import Header from "./Header";
import data from "../data/navListDataAdmin";
import { useState } from "react";
function LayoutAdmin() {
  const [navLinkAdmin, setNavLinkAdmin] = useState(data);
  return (
    <div className="w-full bg-white h-screen overflow-hidden flex p-4 gap-4 text-black">
      <Header data={navLinkAdmin} color={`bg-white`} />
      <main className="w-[80%] h-full bg-yellow-500">
        <Outlet />
      </main>
    </div>
  );
}

export default LayoutAdmin;
