function FilterButton({ text, active, onClick }) {
  return (
    <button
      className={`${
        active ? "shadow-custom" : ""
      } cursor-pointer hover:shadow-custom px- py-2  rounded-sm`}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
}

export default FilterButton;
