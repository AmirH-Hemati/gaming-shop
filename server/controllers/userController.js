export async function me(req, res) {
  const user = req.user;
  res.json({ message: "ok", data: user });
}
