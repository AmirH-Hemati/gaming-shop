import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useLogin } from "./useLogin";
import { useState } from "react";
import Loading from "../../ui/Loading";

function Login({ onToggleLogin }) {
  const { login, isPending } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (isPending) {
    return <Loading />;
  }
  function handelLoginForm(e) {
    e.preventDefault();
    login({ email, password });
  }

  return (
    <form
      className="flex flex-col justify-evenly shadow-custom p-8 h-80 rounded-sm w-96 "
      onSubmit={handelLoginForm}
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#0998a8" },
            "&:hover fieldset": { borderColor: "#0998a8" },
            "&.Mui-focused fieldset": { borderColor: "#0998a8" },
          },
          input: { color: "white" },
          label: { color: "white" },
        }}
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#0998a8" },
            "&:hover fieldset": { borderColor: "#0998a8" },
            "&.Mui-focused fieldset": { borderColor: "#0998a8" },
          },

          input: { color: "white" },
          label: { color: "white" },
        }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ backgroundColor: "#0998a8", padding: "12px" }}
      >
        ورود
      </Button>
      <p className="text-sm select-none ">
        اکانت ندارید.؟{" "}
        <span className="text-[#0998a8] cursor-pointer" onClick={onToggleLogin}>
          ساختن اکانت
        </span>
      </p>
    </form>
  );
}

export default Login;
