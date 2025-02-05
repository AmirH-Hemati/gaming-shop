import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

function Login() {
  function handelLoginForm(e) {
    e.preventDefault();
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
        label="User Name"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#0998a8" },
            "&:hover fieldset": { borderColor: "#0998a8" },
            "&.Mui-focused fieldset": { borderColor: "#0998a8" },
          },
          input: {
            color: "white",
          },
          label: { color: "white" },
        }}
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        type="password"
        label="Password"
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
      <Button variant="contained" sx={{ backgroundColor: "#0998a8" , padding : "15px" }}>
        Contained
      </Button>
    </form>
  );
}

export default Login;
