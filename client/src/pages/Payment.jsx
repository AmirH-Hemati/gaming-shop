import axiosInstance from "../services/axiosInstance";
import { useCurrentUser } from "../features/authorization/useCurrentUser";
import { formatNumber } from "../utils/formatNumber";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetDetails } from "../features/products/useGetDetails";
import Modal from "../ui/Modal";
import EditAddress from "../ui/EditAddress";
import { toast } from "react-toastify";
function Payment() {
  const { user } = useCurrentUser();
  const { products } = useGetDetails();
  const address = user?.data?.addresses[0];
  const [searchParams] = useSearchParams();
  const totalPrice = searchParams.get("totalPrice");
  const isAddressCompelete =
    address?.province &&
    address?.postalCode &&
    address?.city &&
    address?.street;
  async function handlePayment() {
    if (!isAddressCompelete) {
      toast.error("لطفا اطلاعات خود را تکمیل کنید");
    }
    const response = await axiosInstance.post(
      "http://localhost:1212/api/payment",
      {
        amount: totalPrice,
        products: products?.data,
      }
    );
    if (response.data && response.status == 200) {
      window.location.href = response.data.url;
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          جزئیات آدرس ارسال
        </h2>

        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-300">
          <p className="text-gray-600 font-medium text-xl">
            {!isAddressCompelete && "لطفا جزعیات ادرس خود را تکمیل کنید"}
          </p>
          <p className="text-gray-600 font-medium">
            شهر : {address?.province} - {address?.city || "نامشخص"}
          </p>
          <p className="text-gray-500">آدرس :{address?.street || "نامخشص"}</p>
          <p className="text-gray-500">
            کد پستی : {address?.postalCode || "نامشخص"}
          </p>
          <Modal>
            <Modal.Open>
              <button className="bg-[#0998a8] text-white px-4 py-2 rounded-md mt-4">
                ویرایش آدرس
              </button>
            </Modal.Open>
            <Modal.Window>
              <EditAddress />
            </Modal.Window>
          </Modal>
        </div>

        <h2 className="text-lg font-semibold text-gray-700 mt-6 text-center">
          درگاه پرداخت زرین پال{" "}
        </h2>
        <p className="text-lg font-bold text-gray-800 mt-2">
          مبلغ: {formatNumber(totalPrice)} تومان
        </p>

        <button
          disabled={!isAddressCompelete}
          className="mt-4 w-full bg-[#192938] hover:bg-[#192938]/90 cursor-pointer text-white font-bold py-3 rounded-lg shadow-md transition-all duration-300"
          onClick={handlePayment}
        >
          پرداخت
        </button>
      </div>
    </div>
  );
}

export default Payment;
