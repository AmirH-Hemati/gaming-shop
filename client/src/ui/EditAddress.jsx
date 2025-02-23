import { useState } from "react";
import AddressForm from "./AddressForm";

function EditAddress() {
  const [address, setAddress] = useState({
    province: "",
    city: "",
    postalCode: "",
    street: "",
  });
  return (
    <form>
      <AddressForm setAddress={setAddress} address={address} color={`black`} />
      <button type="submit">ذخیره کردن</button>
    </form>
  );
}

export default EditAddress;
