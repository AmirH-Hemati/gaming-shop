import { HambergerMenu, PresentionChart } from "iconsax-react";
import { Link } from "react-router-dom";

function TopMainAdmin({ isActiveMenu, onToggle }) {
  return (
    <div
      className={`relative shadow-custom p-4 w-full flex  justify-between duration-500  ${
        isActiveMenu
          ? "translate-x-4 px-4 md:px-0 md:translate-x-0"
          : "translate-x-0"
      } `}
    >
      <HambergerMenu size="32" color="#192938" onClick={onToggle} />

      <Link
        to={"/"}
        className="flex gap-2  items-center box-border font-semibold hover:shadow-custom p-1 cursor-pointer"
      >
        <PresentionChart size="32" color="#192938" />
        <p> صفحه اصلی </p>
      </Link>
    </div>
  );
}

export default TopMainAdmin;
