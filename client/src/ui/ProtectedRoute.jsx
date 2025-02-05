import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";

function ProtectedRoute() {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to={`/auth`} />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
