import { useState } from "react";
import AddressForm from "./AddressForm";
import { Button } from "@mui/material";
import { useEditUser } from "../features/authorization/useEditUser";

function EditAddress() {
  const { editUser, isPending } = useEditUser();

  const [address, setAddress] = useState({
    province: "",
    city: "",
    postalCode: "",
    street: "",
  });
  function handelChangeAddress(e) {
    e.preventDefault();
    if (address.province === "" || address.city === "") return;
    editUser(address);
  }
  return (
    <form onSubmit={handelChangeAddress}>
      <AddressForm setAddress={setAddress} address={address} color={`black`} />
      <Button
        variant="contained"
        type="submit"
        sx={{ backgroundColor: "#0998a8" }}
        className="w-full md:w-1/3 self-end"
      >
        ذخیره کردن
      </Button>{" "}
    </form>
  );
}

export default EditAddress;
