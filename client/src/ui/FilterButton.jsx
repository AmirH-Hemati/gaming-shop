function FilterButton({ text, filter, setFilter }) {
  return (
    <button
      className={`${
        filter == text ? "shadow-custom" : ""
      } cursor-pointer hover:shadow-custom px-4 py-2  rounded-sm`}
      onClick={() => setFilter(text)}
    >
      <span>{text}</span>
    </button>
  );
}

export default FilterButton;
