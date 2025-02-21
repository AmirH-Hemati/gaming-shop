import AllProducts from "../features/products/AllProducts";
import { useGetProductsByFilter } from "../features/products/useGetProductsByFilter";
import FilterButtons from "../ui/FilterButtons";
import Search from "../ui/Search";

function Categories() {
  const { products } = useGetProductsByFilter();
  //
  return (
    <div className="w-full h-full">
      <div className="flex gap-3 flex-col md:flex-row w-full justify-between my-4">
        <FilterButtons />
        <Search filedSearch="search" color={`#fff`} />
      </div>
      <AllProducts products={products?.data} />
    </div>
  );
}

export default Categories;
