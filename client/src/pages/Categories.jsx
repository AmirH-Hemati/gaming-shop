import AllProducts from "../features/products/AllProducts";
import { useGetProductsByFilter } from "../features/products/useGetProductsByFilter";
import FilterButtons from "../ui/FilterButtons";
import Loading from "../ui/Loading";
import Search from "../ui/Search";

function Categories() {
  const { products, isPending } = useGetProductsByFilter();
  if (isPending) {
    return <Loading />;
  }
  return (
    <div className="w-full h-full">
      <div className="flex gap-3 flex-col md:flex-row w-full justify-between my-4">
        <FilterButtons />
        <Search />
      </div>
      <AllProducts products={products} />
    </div>
  );
}

export default Categories;
