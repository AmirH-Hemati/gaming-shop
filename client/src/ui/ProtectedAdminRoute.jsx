import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";

function ProtectedAdminRoute() {
  const { token, role } = useAuth();

  if (!token || role !== "admin") {
    return <Navigate to={`/auth`} replace />;
  }

  return <Outlet />;
}

export default ProtectedAdminRoute;
