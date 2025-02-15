import Transaction from "../models/transaction.js";
export async function orders(req, res) {
  const allOrders = await Transaction.find({});
  return allOrders;
}
