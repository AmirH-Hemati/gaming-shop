import { Outlet } from "react-router-dom";
import data from "../data/navListDataAdmin";
import Sidebar from "./SideBar";
function LayoutAdmin() {
  return (
    <div className="w-full bg-white h-screen overflow-hidden flex p-4 gap-4 text-black">
      <Sidebar data={data} color={`bg-white`} />
      <main className="w-full md:w-[80%] h-full shadow-custom p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default LayoutAdmin;
