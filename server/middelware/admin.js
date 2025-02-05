export async function admin(req, res, next) {
  if (!req.user || req.user.role !== "admin") {
    return res.status(401).json({ message: "Acsess Deniged", data: null });
  }
  next();
}
