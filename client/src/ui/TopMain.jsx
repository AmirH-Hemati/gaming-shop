import { HambergerMenu, Heart, ShoppingCart } from "iconsax-react";
import { Link, NavLink } from "react-router-dom";
import { useCurrentUser } from "../features/authorization/useCurrentUse";
import { useAddToCart } from "../context/ShoppingContext";
import { useAddToFavorites } from "../context/FavorietsContext";
import { useAuth } from "../context/authContext";

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
        <Link to={`/liberary`}>
          <div className="relative">
            <Heart size="26" color="white" className="cursor-pointer" />
            <p className="text-sm flex items-center justify-center w-4 h-4 absolute -bottom-1 -right-1 bg-[#0998a8] p-1 rounded-full ">
              {totalFavorites()}
            </p>
          </div>
        </Link>
        <Link to={`/shopCart`}>
          <div className="relative">
            <ShoppingCart size="26" color="white" className="cursor-pointer" />
            <p className="text-sm flex items-center justify-center w-4 h-4 absolute -bottom-1 -right-1 bg-[#0998a8] p-1 rounded-full ">
              {totalQty()}
            </p>
          </div>
        </Link>
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
              login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopMain;
