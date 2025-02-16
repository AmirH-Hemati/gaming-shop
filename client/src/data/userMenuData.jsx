import { Edit, Save2, Setting2 } from "iconsax-react";

const userMenuData = [
  {
    id: 1,
    name: "تنظیمات",
    route: "/setting",
    icon: <Setting2 size="32" color="#fff" variant="Bold" />,
  },
  {
    id: 2,
    name: "عوض کردن پسورد",
    route: "/changePassword",
    icon: <Edit size="32" color="#fff" variant="Bold" />,
  },
  {
    id: 3,
    name: "علاقه مندی ها",
    route: "/liberary",
    icon: <Save2 size="32" color="#fff" variant="Bold" />,
  },
  {
    id: 3,
    name: "سفارشات",
    route: "/ordersProduct",
    icon: <Save2 size="32" color="#fff" variant="Bold" />,
  },
];

export default userMenuData;
