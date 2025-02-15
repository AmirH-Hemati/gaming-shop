import axios from "axios";
import express from "express";

const router = express.Router();
router.post("/", async (req, res) => {
  const { amount } = req.body;
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
  if (response.data.data && response.data.data.code == 100) {
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
});
router.get("/verify", async (req, res) => {
  const { amount, Authority, Status } = req.query;
  const params = {
    merchant_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    amount: amount,
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
      return res.json({
        message: "پرداخت موفقیت امیز بود ",
        data: response.data.data.ref_id,
      });
    } else {
      return res.json({ message: "پرداخت موفقیت امیز نبود" });
    }
  } catch (error) {
    res.json({ message: "خطا در تأیید پرداخت", data: null });
  }
});
export default router;
