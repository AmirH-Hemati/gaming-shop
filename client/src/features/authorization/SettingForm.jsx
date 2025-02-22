import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useCurrentUser } from "./useCurrentUser";
import { useEditUser } from "./useEditUser";
import Loading from "../../ui/Loading";
import Input from "../../ui/Input";
import FormLabel from "../../ui/FormLabel";

function SettingForm() {
  const { user } = useCurrentUser();
  const { editUser, isPending } = useEditUser();

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  useEffect(() => {
    if (user?.data) {
      setEmail(user?.data?.email);
      setUserName(user?.data?.userName);
    }
  }, [user?.data]);
  if (isPending) {
    return <Loading />;
  }
  function handelChangeProfile(e) {
    e.preventDefault();
    if (email === "" || userName === "") return;
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("province", province);
    formData.append("city", city);
    formData.append("postalCode", postalCode);
    formData.append("address", address);
    formData.append("file", file);
    editUser(formData);
  }
  return (
    <form className="w-full flex flex-col gap-6" onSubmit={handelChangeProfile}>
      <FormLabel label={`نام کاربــــری`}>
        <Input
          type={`text`}
          value={userName}
          name={`userName`}
          onChange={(e) => setUserName(e.target.value)}
        />
      </FormLabel>

      <FormLabel label={`ایمیـــــــل`}>
        <Input
          type={`text`}
          value={email}
          name={`email`}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormLabel>
      <FormLabel label={`استان`}>
        <Input
          type={`text`}
          value={province}
          name={`province`}
          onChange={(e) => setProvince(e.target.value)}
        />
      </FormLabel>
      <FormLabel label={`شهر`}>
        <Input
          type={`text`}
          value={city}
          name={`city`}
          onChange={(e) => setCity(e.target.value)}
        />
      </FormLabel>
      <FormLabel label={`آدرس`}>
        <Input
          type={`text`}
          value={address}
          name={`address`}
          onChange={(e) => setAddress(e.target.value)}
        />
      </FormLabel>
      <FormLabel label={`کد پستی`}>
        <Input
          type={`text`}
          value={postalCode}
          name={`postalCode`}
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </FormLabel>
      <div className="flex w-full justify-between  font-semibold ">
        <p>عکس پروفایـــل شما *</p>
        <label htmlFor="file">
          <div className=" w-22 h-22 rounded-sm p-1 md:w-40 md:h-40 cursor-pointer  bg-white border border-dotted border-black">
            <img
              src={image ? image : user?.data?.avatar}
              alt=""
              className=" h-full  object-cover rounded-full"
            />
          </div>
          <input
            type="file"
            name="file"
            id="file"
            className="hidden"
            onChange={(e) => {
              setImage(URL.createObjectURL(e.target.files[0]));
              setFile(e.target.files[0]);
            }}
          />
        </label>
      </div>
      <Button
        variant="contained"
        type="submit"
        sx={{ backgroundColor: "#0998a8" }}
        className="w-full md:w-1/3 self-end"
      >
        ذخیره کردن
      </Button>
    </form>
  );
}

export default SettingForm;
