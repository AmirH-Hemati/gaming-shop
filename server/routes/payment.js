import express from "express";
import ZarinPal from "zarinpal-checkout";
const router = express.Router();
const zarinpal_id = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const zarinpal = ZarinPal.create(zarinpal_id, true);
router.post("/", async (req, res) => {
  const { amount, description, email, mobile } = req.body;
  try {
    const response = await zarinpal.PaymentRequest({
      Amount: amount,
      CallbackURL: "http://localhost:1212/api/payment/verify",
      Description: description,
      Email: email,
      Mobile: mobile,
    });

    if (response.status === 100) {
      return res.json({ url: response.url });
    } else {
      return res.status(400).json({ message: "خطا در پرداخت" });
    }
  } catch (error) {
    res.status(500).json({ message: "مشکلی پیش آمده است" });
  }
});
router.get("/api/payment/verify", async (req, res) => {
  const { amount, Authority, Status } = req.query;

  if (Status !== "OK") {
    return res.send("پرداخت ناموفق بود");
  }

  try {
    const response = await zarinpal.PaymentVerification({
      Amount: amount,
      Authority,
    });

    if (response.status === 100 || response.status === 101) {
      return res.send(`پرداخت موفق بود. کد تراکنش: `);
    } else {
      return res.send("پرداخت ناموفق بود");
    }
  } catch (error) {
    res.send("خطا در تأیید پرداخت");
  }
});
export default router;
