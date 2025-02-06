import { Outlet } from "react-router-dom";

function LayoutAdmin() {
  return (
    <div className="bg-red-500 h-screen w-full">
      <p>test</p>
      <Outlet />
    </div>
  );
}

export default LayoutAdmin;
