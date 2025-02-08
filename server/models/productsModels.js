import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String },
  price: { type: String },
  description: { type: String },
  categories: { type: String },
  image: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJPPKxGMgzMNURTx8m2YgHyA_WMoIjcq2FQ&s",
  },
  images: { type: [String], default: [] },
  date: { type: Date, default: Date.now },
});
export default mongoose.model("product", productSchema);
