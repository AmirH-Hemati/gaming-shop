import { useState } from "react";
import axios from "axios";

function Payment() {
  const [amount, setAmount] = useState(10000);
  const [loading, setLoading] = useState(false);



  return (
    <div>
      <h2>پرداخت زرین پال</h2>
      <p>مبلغ: {amount} تومان</p>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? "در حال پردازش..." : "پرداخت"}
      </button>
    </div>
  );
}

export default Payment;
