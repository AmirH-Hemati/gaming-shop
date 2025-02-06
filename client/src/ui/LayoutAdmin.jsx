import { Outlet } from "react-router-dom";
import Header from "./Header";
import data from "../data/navListDataAdmin";
function LayoutAdmin() {
  return (
    <div className="w-full bg-white h-screen overflow-hidden flex p-4 gap-4 text-black">
      <Header data={data} color={`bg-white`} />
      <main className="w-[80%] h-full shadow-custom p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default LayoutAdmin;
