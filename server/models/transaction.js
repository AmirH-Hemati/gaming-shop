import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    userOrder: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
        title: { type: String },
        price: { type: Number },
        image: { type: String },
      },
    ],
    amount: { type: Number },
    authority: { type: String },
    ref_id: { type: String, default: null },
    status: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("transaction", transactionSchema);
