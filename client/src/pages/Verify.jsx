import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axiosInstance from "../services/axiosInstance";
function Verify() {
  const [searchParams] = useSearchParams();
  const Authority = searchParams.get("Authority");
  const Status = searchParams.get("Status");

  useEffect(() => {
    async function fetchData() {
      if (!Authority || !Status) {
        console.log("مشحصات ناقص است");
        return;
      }

      try {
        const response = await axiosInstance.get(
          `http://localhost:1212/api/payment/verify?Authority=${Authority}&Status=${Status}`
        );
        console.log(response);
      } catch (error) {
        console.error("Error verifying payment:", error);
      }
    }

    fetchData();
  }, [Authority, Status]);
  return <div>verify</div>;
}

export default Verify;
