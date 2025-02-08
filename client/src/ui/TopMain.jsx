import { HambergerMenu, Heart, ShoppingCart } from "iconsax-react";
import { Link, NavLink } from "react-router-dom";
import { useCurrentUser } from "../features/authorization/useCurrentUse";
import { useAddToCart } from "../context/ShoppingContext";
import { useAddToFavorites } from "../context/FavorietsContext";
import { useAuth } from "../context/authContext";
import IconCounter from "./IconCounter";

function TopMain({ isActiveMenu, setIsActiveMenu, setfirst }) {
  const { user } = useCurrentUser();
  const { totalQty } = useAddToCart();
  const { totalFavorites } = useAddToFavorites();
  const { token } = useAuth();

  return (
    <div
      className={`relative shadow-custom p-4 w-full flex  justify-between duration-500  ${
        isActiveMenu
          ? "translate-x-4 px-4 md:px-0 md:translate-x-0"
          : "translate-x-0"
      } `}
    >
      <HambergerMenu
        size="32"
        color="white"
        onClick={() => setIsActiveMenu(!isActiveMenu)}
      />

      <div className="flex gap-2 md:gap-4 items-center">
        <IconCounter to={`liberary`} counter={totalFavorites}>
          <Heart size="26" color="white" className="cursor-pointer" />
        </IconCounter>
        <IconCounter to={`shopCart`} counter={totalQty}>
          <ShoppingCart size="26" color="white" className="cursor-pointer" />
        </IconCounter>
        <div>
          {user?.data && token ? (
            <div
              onClick={() => setfirst((first) => !first)}
              className="flex gap-2 items-center shadow-custom px-4 py-1 cursor-pointer "
            >
              <img src={user?.data?.avatar} className="w-6 h-6 rounded-full" />
              <p>{user?.data?.userName}</p>
            </div>
          ) : (
            <NavLink
              to={`/auth`}
              className={`py-0.5 px-3 bg-[#0998a8] rounded-sm`}
            >
              ورود
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopMain;
