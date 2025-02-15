import { useState } from "react";
import axiosInstance from "../services/axiosInstance";
function Payment() {
  const [amount, setAmount] = useState(10000);

  async function handlePayment() {
    const response = await axiosInstance.post(
      "http://localhost:1212/api/payment",
      {
        amount,
      }
    );
    if (response.data && response.status == 200) {
      window.location.href = response.data.url;
    }
  }
  return (
    <div>
      <h2>پرداخت زرین پال</h2>
      <p>مبلغ: {amount} تومان</p>
      <button className="bg-red-500 p-4" onClick={handlePayment}>
        پرداخت
      </button>
    </div>
  );
}

export default Payment;
