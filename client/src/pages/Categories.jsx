import FilterButtons from "../ui/FilterButtons";
import Search from "../ui/Search";

function Categories() {
  return (
    <div className="w-full h-full mt-4">
      <div className="flex w-full justify-between">
        <FilterButtons />
        <Search />
      </div>
    </div>
  );
}

export default Categories;
