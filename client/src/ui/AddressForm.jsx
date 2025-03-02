import { useEffect } from "react";
import { useCurrentUser } from "../features/authorization/useCurrentUser";
import FormLabel from "./FormLabel";
import Input from "./Input";

function AddressForm({ setAddress, address, color }) {
  const { user } = useCurrentUser();
  function onChangeAddress(e) {
    setAddress((address) => ({ ...address, [e.target.name]: e.target.value }));
  }

  useEffect(() => {
    setAddress({
      province: user?.data?.addresses[0]?.province,
      city: user?.data?.addresses[0]?.city,
      street: user?.data?.addresses[0]?.street,
      postalCode: user?.data?.addresses[0]?.postalCode,
      phone: user?.data?.addresses[0]?.phone,
    });
  }, [user?.data.addresses, setAddress]);

  return (
    <div className={`text-${color}`}>
      <FormLabel label={`استان`}>
        <Input
          type={`text`}
          value={address?.province}
          name={`province`}
          onChange={onChangeAddress}
        />
      </FormLabel>
      <FormLabel label={`شهر`}>
        <Input
          type={`text`}
          value={address?.city}
          name={`city`}
          onChange={onChangeAddress}
        />
      </FormLabel>
      <FormLabel label={`آدرس`}>
        <Input
          type={`text`}
          value={address?.street}
          name={`street`}
          onChange={onChangeAddress}
        />
      </FormLabel>
      <FormLabel label={`کد پستی`}>
        <Input
          type={`text`}
          value={address?.postalCode}
          name={`postalCode`}
          onChange={onChangeAddress}
        />
      </FormLabel>
      <FormLabel label={`شماره تلفن همراه`}>
        <Input
          type={`text`}
          value={address?.phone}
          name={`phone`}
          onChange={onChangeAddress}
        />
      </FormLabel>
    </div>
  );
}

export default AddressForm;
