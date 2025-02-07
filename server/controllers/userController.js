import User from "../models/authModel.js";
export async function me(req, res) {
  const user = req.user;
  res.json({ message: "ok", data: user });
}
export async function allUsers(req, res) {
  const users = await User.find({});
  res.json({ message: "ok", data: users });
}

export async function editUser(req, res) {
  const { userName, email } = req.body;
  const updatedUser = { email, userName };
  if (req.file) {
    updatedUser.avatar = re.filename;
  }

  const reslut = await User.findByIdAndUpdate(
    { _id: req.user._id },
    updatedUser,
    { new: true }
  );

  res.json({ message: "ok", data: reslut });
}
