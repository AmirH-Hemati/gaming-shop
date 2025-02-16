import Transaction from "../models/transaction.js";
import axios from "axios";
export async function payment(req, res) {
  const { amount, products } = req.body;
  const params = {
    merchant_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    amount: amount,
    callback_url: "http://localhost:5173/verify",
    description: "خرید تست",
  };
  const response = await axios.post(
    "https://sandbox.zarinpal.com/pg/v4/payment/request.json",
    params
  );
  const finalProducts = products?.map((p) => {
    return {
      productId: p._id,
      title: p.title,
      price: p.price,
      image: p.image,
      qty: p.qty,
    };
  });
  if (response.data.data && response.data.data.code == 100) {
    await Transaction.create({
      userOrder: req.user._id,
      products: finalProducts,
      amount,
      authority: response.data.data.authority,
      paymentStatus: "pending",
    });
    res.json({
      message: "ok",
      url: `https://sandbox.zarinpal.com/pg/StartPay/${response.data.data.authority}`,
    });
  } else {
    res.json({ message: "انجام عملیات پرداخت ناموفق بود" });
  }
  try {
  } catch (error) {
    res.status(500).json({ message: "مشکلی پیش آمده است" });
  }
}
export async function verify(req, res) {
  const { Authority, Status } = req.query;
  const transaction = await Transaction.findOne({ authority: Authority });
  if (!transaction) {
    return res.json({ message: "تراکنش یافت نشد", data: null });
  }
  const params = {
    merchant_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    amount: transaction.amount,
    authority: Authority,
  };

  if (Status !== "OK") {
    return res.send("پرداخت ناموفق بود");
  }

  try {
    const response = await axios.post(
      "https://sandbox.zarinpal.com/pg/v4/payment/verify.json",
      params
    );
    if (
      (response.data.data && response.data.data.code == 101) ||
      response.data.data.code == 100
    ) {
      await Transaction.findOneAndUpdate(
        { authority: Authority },
        { paymentStatus: "paid", ref_id: response.data.data.ref_id }
      );
      return res.json({
        message: "پرداخت موفقیت امیز بود ",
        data: response.data.data.ref_id,
      });
    } else {
      await Transaction.findOneAndUpdate(
        { authority: Authority },
        { paymentStatus: "failed" }
      );
      return res.json({ message: "پرداخت موفقیت امیز نبود" });
    }
  } catch (error) {
    res.json({ message: "خطا در تأیید پرداخت", data: null });
  }
}
