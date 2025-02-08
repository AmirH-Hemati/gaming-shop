import { useSearchParams } from "react-router-dom";
import FilterButton from "./FilterButton";
import filterValues from "../data/filterButtonsData";

function FilterButtons() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("categories") || "all";

  function handleFilterChange(value) {
    searchParams.set("categories", value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex md:gap-6  overflow-x-auto">
      {filterValues.map((item) => (
        <FilterButton
          key={item.value}
          text={item.text}
          active={currentFilter == item.value}
          onClick={() => handleFilterChange(item.value)}
        />
      ))}
    </div>
  );
}

export default FilterButtons;
