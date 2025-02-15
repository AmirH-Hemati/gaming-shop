import axiosInstance from "../services/axiosInstance";
import { useGetDetails } from "../features/products/useGetDetails";
function Payment() {
  const { products } = useGetDetails();
  const totalPrice = products?.data?.reduce(
    (cur, sum) => cur + sum.price * sum.qty,
    0
  );
  console.log(products);
  async function handlePayment() {
    const response = await axiosInstance.post(
      "http://localhost:1212/api/payment",
      {
        amount: 10000,
      }
    );
    if (response.data && response.status == 200) {
      window.location.href = response.data.url;
    }
  }
  return (
    <div>
      <h2>پرداخت زرین پال</h2>
      <p>مبلغ: {10000} تومان</p>
      <button className="bg-red-500 p-4" onClick={handlePayment}>
        پرداخت
      </button>
    </div>
  );
}

export default Payment;
