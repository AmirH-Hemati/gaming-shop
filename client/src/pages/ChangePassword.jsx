import { useState } from "react";
// import { useChangePasswor } from "../featurs/authorizaion/useChangePassword";
import { Button, TextField } from "@mui/material";
import { useChangePassword } from "../features/authorization/useChangePassword";

function ChangePassword() {
  const { changePassword } = useChangePassword();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  function handelChangePassword(e) {
    e.preventDefault();
    changePassword({ email, password, newPassword });
  }
  return (
    <div className="w-full h-full flex items-center justify-center">
      <form
        onSubmit={handelChangePassword}
        className="flex flex-col justify-evenly gap-4 shadow-custom p-8 h-80 rounded-sm w-96"
      >
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
          type="text"
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
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="password"
          label="New Passord"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
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
          عوض کردن پسورد{" "}
        </Button>
      </form>
    </div>
  );
}

export default ChangePassword;
