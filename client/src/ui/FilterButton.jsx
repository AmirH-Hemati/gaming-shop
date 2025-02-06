function FilterButton({ text, setFilter }) {
  return (
    <button onClick={() => setFilter(text)}>
      <span>{text}</span>
    </button>
  );
}

export default FilterButton;
