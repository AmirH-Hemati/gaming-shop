import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get("search") || "";
  function handelSeachChange(e) {
    const newSearch = e.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (newSearch) {
      newParams.set("search", newSearch);
    } else {
      newParams.delete("search");
    }
    setSearchParams(newParams);
  }
  return (
    <input
      type="text"
      value={searchValue}
      placeholder="Search ..."
      onChange={handelSeachChange}
      className="rounded-sm shadow-custom px-4 py-2 outline-none text-white"
    />
  );
}

export default Search;
