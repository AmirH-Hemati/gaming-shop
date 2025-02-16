import { useSearchParams } from "react-router-dom";

function Search({ color }) {
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
      placeholder="جستجو کنید ..."
      onChange={handelSeachChange}
      className="w-1/2 rounded-sm border-2 border-black/20 px-4 py-2 outline-none text-black"
    />
  );
}

export default Search;
