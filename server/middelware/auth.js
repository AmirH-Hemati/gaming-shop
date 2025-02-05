import data from "../../client/src/data/navListData";
import User from "../models/auth.js";
import jwt from "jsonwebtoken";
export async function auth(req, res, next) {
  const token = req.header["authorization"];
  if (!token) {
    return res.status(401).json({ message: "Acsess Deniged", data: null });
  }
  try {
    const decode = jwt.verify(token, "asddwqdwq456dwqdwq");
    const user = await User.findOne({ _id: decode.id }).selected("-password");
    if (!user) {
      return res.status(401).json({ message: "acsess deniged", data: null });
    }
    req.user = user;
    next();
  } catch (error) {
    res.staus(402).json({ message: "inValid Token", data: null });
  }
}
