import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String },
    price: { type: String },
    description: { type: String },
    stock: { type: Number },
    categories: { type: String },
    brand: { type: String },
    technicalSpecs: [
      {
        value: { type: String },
        key: { type: String },
      },
    ],
    image: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJPPKxGMgzMNURTx8m2YgHyA_WMoIjcq2FQ&s",
    },
    images: { type: [String], default: [] },
  },
  { timestamps: true }
);
export default mongoose.model("product", productSchema);
