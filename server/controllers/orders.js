import Transaction from "../models/transaction.js";
export async function orders(req, res) {
  const { search } = req.query;
  const filter = {};
  if (search) {
    filter.ref_id = { $regex: search };
  }
  const allOrders = await Transaction.find(filter).populate(
    "userOrder",
    "userName email  "
  );
  res.json({ message: "ok", data: allOrders });
}

export async function myOrders(req, res) {
  const id = req.user._id;
  const orders = await Transaction.find({ userOrder: id }).populate(
    "userOrder",
    "userName email addresses"
  );
  res.json({ message: "ok", data: orders });
}
export async function myOrder(req, res) {
  const { id } = req.params;
  console.log(id);
  const orders = await Transaction.findOne({ ref_id: id }).populate(
    "userOrder",
    "userName email addresses"
  );
  res.json({ message: "ok", data: orders });
}
export async function order(req, res) {
  const { id } = req.params;
  const order = await Transaction.findOne({ _id: id }).populate(
    "userOrder",
    "userName email addresses"
  );
  res.json({ message: "ok", data: order });
}

export async function updateOrder(req, res) {
  const { orderStatus } = req.body;
  const { id } = req.params;
  const result = await Transaction.findOneAndUpdate(
    { _id: id },
    { orderStatus },
    { new: true }
  );
  res.json({ message: "ok", data: result });
}
