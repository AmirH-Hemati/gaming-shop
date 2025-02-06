import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import FilterButton from "./FilterButton";

function Filtter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    searchParams.set("filter", filter);
    setSearchParams(searchParams);
  }, [filter, searchParams, setSearchParams]);

  return (
    <div className="flex">
      <FilterButton text="all" setFilter={setFilter} />
    </div>
  );
}

export default Filtter;
