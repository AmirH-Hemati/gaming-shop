import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String },
  price: { type: String },
  image: { type: String, default: "image" },
  date: { type: Date, default: Date.now },
});
export default mongoose.model("product", productSchema);
