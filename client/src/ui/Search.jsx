import { useSearchParams } from "react-router-dom";

function Search({ filedSearch, color }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get(filedSearch) || "";
  function handelSeachChange(e) {
    const newSearch = e.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (newSearch) {
      newParams.set(filedSearch, newSearch);
    } else {
      newParams.delete(filedSearch);
    }
    setSearchParams(newParams);
  }
  return (
    <input
      type="text"
      value={searchValue}
      placeholder="جستجو کنید ..."
      onChange={handelSeachChange}
      className={`w-1/2 rounded-sm border-2 border-black/50 px-4 py-2 outline-none text-${color}`}
    />
  );
}

export default Search;
