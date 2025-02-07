import { Category2, Home2, SaveAdd, ShopAdd } from "iconsax-react";

const data = [
  {
    id: 1,
    name: "خانه",
    route: "/",
    icon: <Home2 size="32" color="#fff" variant="Bold" />,
  },
  {
    id: 2,
    name: "محصولات",
    route: "/categories",
    icon: <Category2 size="32" color="#fff" variant="Bold" />,
  },
  {
    id: 3,
    name: "علاقه مندی ها",
    route: "/liberary",
    icon: <SaveAdd size="32" color="#fff" variant="Bold" />,
  },
  {
    id: 4,
    name: "سبد خرید",
    route: "/shopCart",
    icon: <ShopAdd size="32" color="#fff" variant="Bold" />,
  },
];
export default data;
