import Products from "../models/productsModels.js";
export async function products(req, res) {
  console.log("test in api for products");
  const products = await Products.find({});
  res.json({ message: "ok", data: products });
}
export async function createProduct(req, res) {
  const { title, price } = req.body;
  const imagePath = `http://localhost:1212/${req.file.filename}`;
  const product = await Products.create({ title, price, image: imagePath });
  res.json({ message: "ok", data: product });
}
export async function product(req, res) {
  const { id } = req.params;
  const reslut = await Products.findOne({ _id: id });
  res.json({ message: "ok", data: reslut });
}
export async function updateProduct(req, res) {
  const { id } = req.params;
  const { title, price } = req.body;
  const updatedProducts = { title, price };
  const product = await Products.findOne({ _id: id });
  if (!product) {
    return res.status(404).json({ message: "product not found", data: null });
  }
  if (req.file) {
    if (product.image) {
      //remove product
    }
    updateProduct.image = req.file.filename;
  }
  const result = await Products.findByIdAndUpdate(
    { id: _id },
    updatedProducts,
    { new: true }
  );
  res.json({ message: "ok", data: reslut });
}
export async function deleteProduct(req, res) {
  const { id } = req.params;
  const reslut = await Products.deleteOne({ _id: id });
  res.json({ message: "ok", data: reslut });
}
export async function detailsProducts(req, res) {
  const { items } = req.body;
  const productIds = items?.map((item) => item.id);
  const products = await Products.find({ _id: { $in: productIds } });
  const enrichedProducts = products.map((product) => {
    const item = items.find((i) => i.id === product._id.toString());
    return { ...product.toObject(), qty: item.qty };
  });
  console.log(enrichedProducts);
  res.json({ message: "ok", data: enrichedProducts });
}
