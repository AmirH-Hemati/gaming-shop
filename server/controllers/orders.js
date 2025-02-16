import Transaction from "../models/transaction.js";
export async function orders(req, res) {
  const { search } = req.query;
  const filter = {};
  if (search) {
    filter.ref_id = { $regex: search };
  }
  console.log(filter);
  const allOrders = await Transaction.find(filter).populate(
    "userOrder",
    "userName email"
  );
  res.json({ message: "ok", data: allOrders });
}
export async function myOrders(req, res) {
  const id = req.user._id;
  console.log(id);
  const orders = await Transaction.find({ userOrder: id });
  res.json({ message: "ok", data: orders });
}
export async function order(req, res) {
  const { id } = req.params;
  const order = await Transaction.findOne({ _id: id }).populate(
    "userOrder",
    "userName email"
  );
  res.json({ message: "ok", data: order });
}
