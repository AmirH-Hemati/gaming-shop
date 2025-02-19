import mongoose from "mongoose";
const commentSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    text: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Commnet", commentSchema);
