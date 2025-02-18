import Commnet from "../models/comment.js";
export async function AddComment(req, res) {
  const { text, productId } = req.body;

  const result = await Comment.create({ text, user: req.user._id, productId });
  res.json({ message: "ok", data: result });
}
