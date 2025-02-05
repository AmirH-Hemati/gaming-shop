import Products from "../models/productsModels.js";
export async function products(req, res) {
  const products = await Products.find({});
  res.json({ message: "ok", data: products });
}
export async function createProduct(req, res) {
  const { title, price } = req.body;
  console.log(title, price);
}
