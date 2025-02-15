import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios"
function Verify() {
  const [searchParams] = useSearchParams();
  const Authority = searchParams.get("Authority");
  const Status = searchParams.get("Status");
  const amount = 10000;
  useEffect(() => {
    async function fetchData() {
      if (!Authority || !Status) {
        console.log("مشحصات ناقص است");
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:1212/api/payment/verify?amount=${amount}&Authority=${Authority}&Status=${Status}`
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
