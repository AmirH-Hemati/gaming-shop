import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterButton from "./FilterButton";

function FilterButtons() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState("همه");
  useEffect(() => {
    searchParams.set("filter", filter);
    setSearchParams(searchParams);
  }, [filter, searchParams, setSearchParams]);

  return (
    <div className="flex gap-6">
      <FilterButton text="همه" setFilter={setFilter} filter={filter} />
      <FilterButton text="موس" setFilter={setFilter} filter={filter} />
      <FilterButton text="کیبورد" setFilter={setFilter} filter={filter} />
      <FilterButton text="مانیتور" setFilter={setFilter} filter={filter} />
    </div>
  );
}

export default FilterButtons;
