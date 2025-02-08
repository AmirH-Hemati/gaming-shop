import { HambergerMenu, PresentionChart } from "iconsax-react";

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

      <div className="flex gap-2  items-center box-border font-semibold hover:shadow-custom p-1 cursor-pointer">
        <PresentionChart size="32" color="#192938" />
        <p> صفحه اصلی </p>
      </div>
    </div>
  );
}

export default TopMainAdmin;
