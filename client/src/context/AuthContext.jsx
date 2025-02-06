import { createContext, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
const authContext = createContext();
function AuthContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState("");
  useEffect(() => {
    const decode = jwtDecode(token);
    console.log("decode", decode);
  }, [token]);

  function loginStoredToken(token) {
    localStorage.setItem("token", token);
    setToken(token);
  }

  function logout() {
    setToken("");
    localStorage.removeItem("token");
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
