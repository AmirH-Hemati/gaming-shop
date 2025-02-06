import User from "../models/authModel.js";
export async function me(req, res) {
  const user = req.user;
  res.json({ message: "ok", data: user });
}
export async function allUsers(req, res) {
  const users = await User.find({});
  res.json({ message: "ok", data: users });
}
