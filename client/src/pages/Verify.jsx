import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../services/axiosInstance";
function Verify() {
  const [refId, setRefId] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const Authority = searchParams.get("Authority");
  const Status = searchParams.get("Status");

  useEffect(() => {
    async function fetchData() {
      if (!Authority || !Status) {
        setMessage("مشحصات ناقص است");
        return;
      }

      try {
        const response = await axiosInstance.get(
          `http://localhost:1212/api/payment/verify?Authority=${Authority}&Status=${Status}`
        );
        setMessage(response.data.message);
        setRefId(response.data.data);
      } catch (error) {
        setMessage("Error verifying payment:");
      }
    }

    fetchData();
  }, [Authority, Status]);
  return (
    <div className="flex flex-col items-center justify-center h-full bg-[#192938] shadow-custom">
      <h2 className="text-2xl font-bold text-green-600">{message}</h2>
      <p className="text-white">شماره پیگیری: {refId}</p>
      <Link
        to="/ordersProduct"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        مشاهده سفارشات
      </Link>
    </div>
  );
}

export default Verify;
