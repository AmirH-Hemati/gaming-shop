import Transaction from "../models/transaction.js";
export async function orders(req, res) {
  const allOrders = await Transaction.find({}).populate(
    "userOrder",
    "userName email"
  );
  res.json({ message: "ok", data: allOrders });
}
export async function myOrders(req, res) {
  const id = req?.user?._id;
  const orders = await Transaction.find({ userOrder: id });
  res.json({ message: "ok", data: orders });
}
