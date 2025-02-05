import Products from "../models/productsModels.js";
export async function products(req, res) {
  const products = await Products.find({});
  res.json({ message: "ok", data: products });
}
export async function createProduct(req, res) {
  const { title, price } = req.body;
  const imagePath = `http://localhost:1212/${req.file.filename}`;
  const product = await Products.create({ title, price, image: imagePath });
  res.json({ message: "ok", data: product });
}
