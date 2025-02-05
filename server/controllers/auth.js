import bcy from "bcrypt";
import User from "../models/authModel.js";
import jwt from "jsonwebtoken";
export async function register(req, res) {
  const { userName, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "User Already Exist", data: null });
  }
  const salt = await bcy.genSalt(12);
  const hashedPassword = await bcy.hash(password, salt);
  user = await User.create({ userName, email, password: hashedPassword });
  res.json({ message: "ok", data: user });
}

export async function login(req, res) {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .json({ message: "email or passowrd inValid", data: null });
  }
  const inMatch = await bcy.compare(password, user.password);
  if (!inMatch) {
    return res
      .status(400)
      .json({ message: "email or password inValid", data: null });
  }
  const token = jwt.sign({ id: user._id }, "asddwqdwq456dwqdwq");
  res.json({ message: "ok", data: token });
}
