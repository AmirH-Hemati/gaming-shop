import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useRegister } from "./useRegister";
import Loading from "../../ui/Loading";

function SignIn({ onToggleLogin }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, isPending } = useRegister();
  if (isPending) {
    return <Loading />;
  }
  function handelRegister(e) {
    e.preventDefault();
    register({ userName, email, password });
  }
  return (
    <form
      onSubmit={handelRegister}
      className="flex flex-col justify-evenly gap-4 shadow-custom p-8 h-80 rounded-sm w-96"
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        type="text"
        label="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
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
        type="text"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
          label: { color: "white" }, // متن لیبل
        }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ backgroundColor: "#0998a8", padding: "12px" }}
      >
        ثبت نام
      </Button>
      <p className="text-sm select-none ">
        اکانت دارید ؟.{" "}
        <span className="text-[#0998a8] cursor-pointer" onClick={onToggleLogin}>
          ورود به اکانت{" "}
        </span>
      </p>
    </form>
  );
}

export default SignIn;
