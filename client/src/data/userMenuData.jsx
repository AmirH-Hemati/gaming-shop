import { Edit, Save2, Setting2 } from "iconsax-react";

const userMenuData = [
  {
    id: 1,
    name: "Setting",
    route: "/setting",
    icon: <Setting2 size="32" color="#fff" variant="Bold" />,
  },
  {
    id: 2,
    name: "Change Password",
    route: "/changePassword",
    icon: <Edit size="32" color="#fff" variant="Bold" />,
  },
  {
    id: 3,
    name: "Favorites",
    route: "/liberary",
    icon: <Save2 size="32" color="#fff" variant="Bold" />,
  },
];

export default userMenuData;
