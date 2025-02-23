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
  const { userName, email, address } = req.body;
  const addressObject = JSON.parse(address);
  const updatedUser = { email, userName, addresses: [addressObject] };
  console.log(updatedUser);
  const currentUser = await User.findOne({ _id: req.user._id });
  if (!currentUser) {
    return res.status(400).json({ message: "User Not Found", data: nulls });
  }
  if (req.file) {
    updatedUser.avatar = `http://localhost:1212/${req.file.filename}`;
  }

  const isDataChanged =
    (userName && currentUser.userName !== userName) ||
    (email && currentUser.email !== email) ||
    (req.file && currentUser.avatar !== updatedUser.avatar) ||
    (addressObject.province &&
      currentUser.province !== addressObject.province) ||
    (addressObject.city && currentUser.city !== addressObject.city) ||
    (addressObject.postalCode &&
      currentUser.postalCode !== addressObject.postalCode) ||
    (addressObject.street && currentUser.street !== addressObject.street);

  if (!isDataChanged) {
    return res
      .status(400)
      .json({ message: "No changes detected, no update needed.", data: null });
  }
  const reslut = await User.findByIdAndUpdate(
    { _id: req.user._id },
    updatedUser,
    { new: true }
  );

  res.json({ message: "ok", data: reslut });
}
