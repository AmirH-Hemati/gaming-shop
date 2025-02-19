import Products from "../models/productsModels.js";
export async function getProducts(req, res) {
  const { categories, search } = req.query;
  const filter = {};
  if (categories && categories !== "all") {
    filter.categories = categories;
  }
  if (search) {
    filter.title = { $regex: search, $options: "i" };
  }
  const products = await Products.find(filter);
  res.json({ message: "ok", data: products });
}

export async function createProduct(req, res) {
  const { title, price, description, categories, brand, stock, technical } =
    req.body;
  const imagePath = `http://localhost:1212/${req.files["image"][0].filename}`;
  const images = req.files["images"].map(
    (image) => `http://localhost:1212/${image.filename}`
  );
  const product = await Products.create({
    title,
    price,
    description,
    categories,
    brand,
    stock,
    technicalSpecs: JSON.parse(technical),
    image: imagePath,
    images,
  });
  res.json({ message: "ok", data: product });
}
export async function getProduct(req, res) {
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

    updatedProducts.image = `http://localhost:1212/${req.file.filename}`;
  }

  const result = await Products.findByIdAndUpdate(
    { _id: id },
    updatedProducts,
    { new: true }
  );
  res.json({ message: "ok", data: result });
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
  res.json({ message: "ok", data: enrichedProducts });
}
