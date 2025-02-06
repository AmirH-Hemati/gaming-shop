import { AddSquare, AlignBottom, Edit, UserSearch } from "iconsax-react";

const data = [
  {
    id: 1,
    name: "Dashboard",
    route: "/admin",
    icon: <AlignBottom size="32" color="#FF8A65" />,
  },
  {
    id: 2,
    name: "Add Product",
    route: "/AddProduct",
    icon: <AddSquare size="32" color="#FF8A65" />,
  },
  {
    id: 3,
    name: "Edit Products",
    route: "/editProducts",
    icon: <Edit size="32" color="#FF8A65" />,
  },
  {
    id: 4,
    name: "Users",
    route: "/users",
    icon: <UserSearch size="32" color="#FF8A65" />,
  },
];
export default data;
