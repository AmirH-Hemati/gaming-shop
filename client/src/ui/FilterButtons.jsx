import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterButton from "./FilterButton";

function FilterButtons() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    searchParams.set("categories", filter);
    setSearchParams(searchParams);
  }, [filter, searchParams, setSearchParams]);

  return (
    <div className="flex md:gap-6  overflow-x-auto">
      <FilterButton text="all" setFilter={setFilter} filter={filter} />
      <FilterButton text="mouse" setFilter={setFilter} filter={filter} />
      <FilterButton text="keyboard" setFilter={setFilter} filter={filter} />
      <FilterButton text="monitor" setFilter={setFilter} filter={filter} />
    </div>
  );
}

export default FilterButtons;
