function NavListItem({ item, isActive }) {
  return (
    <li className="flex items-center gap-2 hover:shadow-custom p-3 cursor-pointer rounded-sm overflow-hidden">
      {item?.icon}
      <p className={`${isActive ? "hidden" : ""}`}>{item?.name}</p>
    </li>
  );
}

export default NavListItem;
