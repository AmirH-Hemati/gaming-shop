import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useCurrentUser } from "../features/authorization/useCurrentUser";
import Loading from "../ui/Loading";

const authContext = createContext();
function AuthContextProvider({ children }) {
  const { user, isPending } = useCurrentUser();
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState(user?.data?.role, "");

  useEffect(() => {
    if (token) {
      const decode = jwtDecode(token);
      setRole(decode?.role);
    } else {
      setRole("");
    }
  }, [token]);
  // if (isPending) {
  //   return <Loading />;
  // }
  function loginStoredToken(token) {
    localStorage.setItem("token", token);
    setToken(token);
  }

  function logout() {
    localStorage.removeItem("token");
    setToken("");
    setRole("");
  }
  return (
    <authContext.Provider value={{ loginStoredToken, logout, role, token }}>
      {children}
    </authContext.Provider>
  );
}
function useAuth() {
  return useContext(authContext);
}
export { AuthContextProvider, useAuth };
