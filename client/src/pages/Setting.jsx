import { MessageText } from "iconsax-react";
import FormLabel from "../ui/FormLabel";
import Input from "../ui/Input";
import { useEffect, useState } from "react";
import { useCurrentUser } from "../features/authorization/useCurrentUse";
import { Button } from "@mui/material";
import { useEditUser } from "../features/authorization/useEditUser";

function Setting() {
  const { user } = useCurrentUser();
  const { editUser } = useEditUser();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState("");
  useEffect(() => {
    if (user?.data) {
      setEmail(user?.data?.email);
      setUserName(user?.data?.userName);
    }
  }, [user?.data]);

  function handelChangeProfile(e) {
    e.preventDefault();
    if (email === "" || userName === "") return;
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("file", file);
    editUser(formData);
  }
  return (
    <div className="w-full shadow-custom h-full flex flex-col items-center p-4 text-sm">
      <div className="w-full shadow-custom flex gap-4">
        <img
          src={user?.data?.avatar}
          alt=""
          className="w-12 h-12 md:w-24 md:h-24 object-cover rounded-sm"
        />
        <div className="flex flex-col justify-evenly">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-xl">{user?.data?.userName}</p>
            <p className="bg-[#0998A8] text-gray-200 px-1 text-xs rounded-2xl">
              {user?.data?.role}
            </p>
          </div>
          <div className="flex items-center">
            <MessageText size="20" color="#fff" variant="Bold" />
            <p>ایمیل : {user?.data?.email}</p>
          </div>
        </div>
      </div>
      <form
        className="w-full flex flex-col gap-6"
        onSubmit={handelChangeProfile}
      >
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
    </div>
  );
}

export default Setting;
