import { useState } from "react";
import Login from "../features/authorization/Login";
import SignIn from "../features/authorization/SignIn";

function AuthPage() {
  const [hasLogin, setHasLogin] = useState(true);
  const handelToggleLogin = () => setHasLogin((hasLogin) => !hasLogin);
  return (
    <div className="flex justify-center items-center  w-full h-full">
      {hasLogin ? (
        <Login onToggleLogin={handelToggleLogin} />
      ) : (
        <SignIn onToggleLogin={handelToggleLogin} />
      )}
    </div>
  );
}

export default AuthPage;
