import { AddSquare, AlignBottom, Edit, UserSearch } from "iconsax-react";

const data = [
  {
    id: 1,
    name: "داشبورد",
    route: "/admin",
    icon: <AlignBottom size="32" color="#192938" variant="Bold" />,
  },
  {
    id: 2,
    name: "محصول جدید",
    route: "/AddProduct",
    icon: <AddSquare size="32" color="#192938" variant="Bold" />,
  },
  {
    id: 3,
    name: "محصولات",
    route: "/editProducts",
    icon: <Edit size="32" color="#192938" variant="Bold" />,
  },
  {
    id: 4,
    name: "کاربران",
    route: "/users",
    icon: <UserSearch size="32" color="#192938" variant="Bold" />,
  },
];
export default data;
