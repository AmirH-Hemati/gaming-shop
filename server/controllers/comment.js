import Commnet from "../models/comment.js";
export async function AddComment(req, res) {
  const { text, productId } = req.body;
  const result = await Commnet.create({ text, user: req.user._id, productId });
  res.json({ message: "ok", data: result });
}

export async function getComments(req, res) {
  const { id } = req.params;
  const comments = await Commnet.find({ productId: id }).populate(
    "user",
    "userName email"
  );

  res.json({ message: "ok", data: comments });
}
