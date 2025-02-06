import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Filtter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    searchParams.set("filter", filter);
    setSearchParams(searchParams);
  }, [filter, searchParams, setSearchParams]);

  return <div></div>;
}

export default Filtter;
